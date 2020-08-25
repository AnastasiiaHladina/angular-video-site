import { AppState, AuthState } from '../states';
import { createSelector } from '@ngrx/store';

const selectAuth = (state: AppState) => state.auth;

export const selectIsUserLoggedIn = createSelector(selectAuth, (state: AuthState) => Boolean(state.token));
export const selectAuthUser = createSelector(selectAuth, (state: AuthState) => state.user);
