import { Injectable } from '@angular/core';
import {
  ECourseAction,
  EndCourseAdding,
  EndCoursesLoading,
  EndCourseUpdating,
  StartCourseAdding,
  StartCourseDeleting,
  StartCoursesLoading,
  StartCourseUpdating,
} from '../actions';
import { delay, switchMap, take, tap } from 'rxjs/operators';
import { CoursesService } from '../../services/courses/courses.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Course } from '../../enitities';
import { of } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';

@Injectable()
export class CoursesEffects {
  constructor(private action$: Actions, private coursesService: CoursesService, private loadingService: LoadingService) {
  }

  @Effect()
  getCourses$ = this.action$.pipe(
    ofType(ECourseAction.StartCoursesLoading),
    tap(() => this.loadingService.setIsVisibleLoading(true)),
    switchMap(() => this.coursesService.getCoursesList()),
    switchMap((courses: Course[]) => of(new EndCoursesLoading(courses))),
    delay(1000),
    tap(() => this.loadingService.setIsVisibleLoading(false)),
  );

  @Effect()
  addCourse$ = this.action$.pipe(
    ofType(ECourseAction.StartCourseAdding),
    switchMap((course: StartCourseAdding) => this.coursesService.createCourse(course.payload)),
    switchMap((course: Course) => of(new EndCourseAdding(course))),
    delay(1000),
    tap(() => this.loadingService.setIsVisibleLoading(false)),
  );

  @Effect()
  updateCourse$ = this.action$.pipe(
    ofType(ECourseAction.StartCourseUpdating),
    switchMap((course: StartCourseUpdating) => this.coursesService.updateItem(course.payload)),
    switchMap((course: Course) => of(new EndCourseUpdating(course))),
    delay(1000),
    tap(() => this.loadingService.setIsVisibleLoading(false)),
  );

  @Effect()
  deleteCourse$ = this.action$.pipe(
    ofType(ECourseAction.StartCourseDeleting),
    switchMap((course: StartCourseDeleting) => this.coursesService.removeItem(course.payload)),
    switchMap(() => of(new StartCoursesLoading())),
    delay(1000),
    tap(() => this.loadingService.setIsVisibleLoading(false)),
  );
}
