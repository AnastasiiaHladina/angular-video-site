import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states';
import { Course } from '../../enitities';
import { selectCourses } from '../../store/selectors';
import { filter } from 'rxjs/operators';
import {
  IncreasePage,
  ResetPage,
  Search,
  StartCourseAdding,
  StartCourseDeleting,
  StartCoursesLoading,
  StartCourseUpdating,
} from '../../store/actions';

@Injectable({
  providedIn: 'root',
})
export class CourseStoreFacadeService {
  public courses$ = this.store.select(selectCourses)
    .pipe(filter<Course[]>(Boolean));

  constructor(private store: Store<AppState>) { }

  getCourses() {
    this.store.dispatch(new StartCoursesLoading());
  }

  loadMoreCourses() {
    this.store.dispatch(new IncreasePage());
    this.getCourses();
  }

  deleteCourse(id: string) {
    this.store.dispatch(new StartCourseDeleting(id));
  }

  searchCourse(searchText: string) {
    this.store.dispatch(new ResetPage());
    this.store.dispatch(new Search(searchText));
    this.getCourses();
  }

  createCourse(course: Course) {
    this.store.dispatch(new StartCourseAdding(course));
  }

  updateCourse(course: Course) {
    this.store.dispatch(new StartCourseUpdating(course));
  }
}
