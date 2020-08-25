import { AuthState, initialAuthState } from './auth';
import { CourseState, initialCourseState } from './course';
import { AuthorsState, initialAuthorsState } from './authors';
import { GenreState, initialGenreState } from './genre';

export interface AppState {
  auth: AuthState;
  course: CourseState;
  authors: AuthorsState;
  genre: GenreState;
}

export const initialAppState: AppState = {
  auth: initialAuthState,
  course: initialCourseState,
  authors: initialAuthorsState,
  genre: initialGenreState,
};
