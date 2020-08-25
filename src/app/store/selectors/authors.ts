import { createSelector } from '@ngrx/store';
import { AppState, AuthorsState } from '../states';

const selectAuthors = (state: AppState) => state.authors;

export const selectAuthorsList = createSelector(selectAuthors, (state: AuthorsState) => state.authors);
