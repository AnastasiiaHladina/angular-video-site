import { createSelector } from '@ngrx/store';
import { AppState, CourseState } from '../states';

const selectCourse = (state: AppState) => state.course;

export const selectCourses = createSelector(selectCourse, (state: CourseState) => state.courses);
