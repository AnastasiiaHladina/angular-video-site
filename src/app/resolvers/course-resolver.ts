import { Injectable } from '@angular/core';
import { Course } from '../enitities';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { CoursesService } from '../services/courses/courses.service';

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private coursesService: CoursesService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.coursesService.getItemById(route.paramMap.get('id'));
  }
}
