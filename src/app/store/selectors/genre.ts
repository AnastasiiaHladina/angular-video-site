import { createSelector } from '@ngrx/store';
import { AppState, GenreState } from '../states';

const selectGenre = (state: AppState) => state.genre;

export const selectGenreList = createSelector(selectGenre, (state: GenreState) => state.genre);
