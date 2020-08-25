import { Component } from '@angular/core';
import { CourseStoreFacadeService } from '../../../services/facade/course-store-facade.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  constructor(private storeFacadeService: CourseStoreFacadeService) {}

  changeBreadcrumb() {
    this.storeFacadeService.searchCourse('');
  }
}
