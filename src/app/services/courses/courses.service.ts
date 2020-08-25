import { Injectable } from '@angular/core';
import { Course } from '../../enitities';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { AppState } from '../../store/states';
import { State } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient, private state: State<AppState>) {}

  removeItem(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/courses/${id}`);
  }

  updateItem(course: Course) {
    return this.httpClient.patch(`${environment.apiUrl}/courses/${course.id}`, course);
  }

  getItemById(id: string): Observable<Course> {
    return this.httpClient.get<Course>(`${environment.apiUrl}/courses/${id}`)
    .pipe(
      map((item) => {
        return {
          ...item,
          authors: item.authors
            .map((el: { id: string, name: string, lastName: string, selected: boolean }) => {
              return {
                id: el.id,
                name: el.name + ' ' + el.lastName,
                selected: true,
              };
            }),
        };
      }));
  }

  getCoursesList(): Observable<Course[]> {
    const params = new HttpParams()
      .set('start', this.state.getValue().course.page.toString())
      .set('count', this.state.getValue().course.count.toString())
      .set('textFragment', this.state.getValue().course.searchText);

    return this.httpClient.get<Course[]>(`${environment.apiUrl}/courses/`, { params });
  }

  createCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(`${environment.apiUrl}/courses/`, course);
  }
}
