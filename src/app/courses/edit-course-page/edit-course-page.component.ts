import { Component, OnInit } from '@angular/core';
import { Author, Course, Genre } from '../../enitities';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorsStoreFacadeService } from '../../services/facade/authors-store-facade.service';
import { CourseStoreFacadeService } from '../../services/facade/course-store-facade.service';
import { TranslateService } from '@ngx-translate/core';
import { GenreStoreFacadeService } from '../../services/facade/genre-store-facade.service';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.css'],
})
export class EditCoursePageComponent implements OnInit {
  pageTitle: string;
  course: Course;
  authors$: Observable<Author[]>;
  genre$: Observable<Genre[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorsStoreFacadeService: AuthorsStoreFacadeService,
    private genreStoreFacadeService: GenreStoreFacadeService,
    private genreStoreFacade: GenreStoreFacadeService,
    private coursesStoreFacadeService: CourseStoreFacadeService,
    private translate: TranslateService) {
    this.pageTitle = translate.instant('EDIT_COURSE.Title_Page');
  }

  ngOnInit() {
    this.course = this.route.snapshot.data.course;
    this.authorsStoreFacadeService.getAuthors();
    this.genreStoreFacade.dispatchGenre();
    this.authors$ = this.authorsStoreFacadeService.authorsList$
      .pipe(
        map((response: Author[]) => {
          return [ ...response, ...this.course.authors ];
        }),
      );
    this.genre$ = this.genreStoreFacadeService.genreList$
      .pipe(
        map((response: Genre[]) => {
          return [ ...response, ...this.course.genre ];
        }),
      );
  }

  onFormSubmit(course: Course) {
    this.coursesStoreFacadeService.updateCourse(course);
    return this.navigateToCoursesList();
  }

  onFormCancel() {
    return this.navigateToCoursesList();
  }

  private navigateToCoursesList() {
    return this.router.navigate(['/courses']);
  }
}
