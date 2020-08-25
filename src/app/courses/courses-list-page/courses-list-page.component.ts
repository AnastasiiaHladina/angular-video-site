import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseStoreFacadeService } from '../../services/facade/course-store-facade.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-list-page.component.html',
  styleUrls: ['./courses-list-page.component.css'],
})
export class CoursesListPageComponent implements OnInit {
  courses$ = this.courseStoreFacadeService.courses$;

  constructor(private router: Router, private courseStoreFacadeService: CourseStoreFacadeService) {}

  ngOnInit() {
    this.courseStoreFacadeService.getCourses();
  }

  onSearchChange(searchText: string) {
    this.courseStoreFacadeService.searchCourse(searchText);
  }

  deleteCourse(id: string) {
    this.courseStoreFacadeService.deleteCourse(id);
  }

  editCourse(id: string) {
    this.router.navigate(['courses/course/' + id + '/edit']);
  }

  loadMore() {
    this.courseStoreFacadeService.loadMoreCourses();
  }
}
