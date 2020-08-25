import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './courses-list-page/add-course/add-course.component';
import { CourseComponent } from './courses-list-page/course/course.component';
import { CoursesListPageComponent } from './courses-list-page/courses-list-page.component';
import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { OrderByDatePipe } from '../pipe/orderByDate/order-by.pipe';
import { SearchByTitlePipe } from '../pipe/filterByTitle/filterByTitle.pipe';
import { DateInputComponent } from './course-form/date-input/date-input.component';
import { DurationInputComponent } from './course-form/duration-input/duration-input.component';
import { AuthorsInputComponent } from './course-form/authors-input/authors-input.component';
import { FindComponent } from './courses-list-page/find/find.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/guard/auth-guard.service';
import { CourseResolver } from '../resolvers/course-resolver';
import { SelectedFilterPipe } from '../pipe/selected/selected-filter.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { GenreInputComponent } from './course-form/genre-input/genre-input.component';
import { NgxDatePickerModule } from '@ngx-tiny/date-picker';

const routes: Routes = [
  {
    path: '',
    component: CoursesListPageComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumbs: 'COURSES_LIST.Courses',
    },
  },
  {
    path: 'course/:id/edit',
    component: EditCoursePageComponent,
    canActivate: [AuthGuard],
    resolve: { course: CourseResolver },
    data: {
      breadcrumbs: 'COURSE.Edit_Button',
    },
  },
  {
    path: 'course/add',
    component: AddCoursePageComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumbs: 'COURSES_LIST.Add_Button',
    },
  },
  {
    path: 'course/:id',
    component: CoursePageComponent,
    canActivate: [AuthGuard],
    resolve: { course: CourseResolver },
    data: {
      breadcrumbs: 'COURSE.Single',
    },
  },
];

@NgModule({
  declarations: [
    AddCourseComponent,
    CourseComponent,
    CoursesListPageComponent,
    EditCoursePageComponent,
    AddCoursePageComponent,
    CoursePageComponent,
    CourseFormComponent,
    DateInputComponent,
    DurationInputComponent,
    AuthorsInputComponent,
    OrderByDatePipe,
    SearchByTitlePipe,
    FindComponent,
    SelectedFilterPipe,
    GenreInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxDatePickerModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  providers: [
    SelectedFilterPipe,
  ],
})
export class CoursesModule { }
