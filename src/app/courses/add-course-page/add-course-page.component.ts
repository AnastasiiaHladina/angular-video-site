import { Component, OnInit } from '@angular/core';
import { Course } from '../../enitities';
import { randomId } from '../../../helper';
import { Router } from '@angular/router';
import { AuthorsStoreFacadeService } from '../../services/facade/authors-store-facade.service';
import { CourseStoreFacadeService } from '../../services/facade/course-store-facade.service';
import { TranslateService } from '@ngx-translate/core';
import { GenreStoreFacadeService } from '../../services/facade/genre-store-facade.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css'],
})
export class AddCoursePageComponent implements OnInit {
  pageTitle: string;
  course: Course;
  authorsList$ = this.authorsStoreFacade.authorsList$;

  constructor(
    private router: Router,
    private authorsStoreFacade: AuthorsStoreFacadeService,
    private genreStoreFacade: GenreStoreFacadeService,
    private courseStoreFacadeService: CourseStoreFacadeService,
    private translate: TranslateService) {
    this.pageTitle = translate.instant('ADD_COURSE.Title_Page');
    this.course = {
      id: randomId(9999).toString(),
      name: '',
      img: 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43083/clapper-board-emoji-clipart-md.png',
      url: '',
      genre: [],
      date: new Date(),
      length: 0,
      authors: [],
      description: '',
      isTopRated: false,
    };
  }

  ngOnInit() {
    this.authorsStoreFacade.getAuthors();
    this.genreStoreFacade.dispatchGenre();
  }

  onFormSubmit(course: Course) {
    this.courseStoreFacadeService.createCourse(course);

    return this.navigateToCoursesList();
  }

  onFormCancel() {
    return this.navigateToCoursesList();
  }

  private navigateToCoursesList() {
    return this.router.navigate(['/courses']);
  }
}
