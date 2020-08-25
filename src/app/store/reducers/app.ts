import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states';
import { authReducers } from './auth';
import { courseReducer } from './course';
import { authorReducer } from './author';
import { genreReducer } from './genre';

export const appReducers: ActionReducerMap<AppState, any> = {
  auth: authReducers,
  course: courseReducer,
  authors: authorReducer,
  genre: genreReducer,
};
