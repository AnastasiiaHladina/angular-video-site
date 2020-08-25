import { Course } from '../../enitities';

export interface CourseState {
  courses: Course[];
  count: number;
  page: number;
  searchText: string;
}

export const initialCourseState: CourseState = {
  courses: [],
  count: 5,
  page: 0,
  searchText: '',
};
