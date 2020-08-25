import { Action } from '@ngrx/store';
import { Genre } from '../../enitities';

export enum EGenreAction {
  StartGenreLoading = '[Genre Page] Start Genre Loading',
  EndGenreLoading = '[Genre Page] End Genre Loading',
  FailGenreLoading = '[Genre Page] Fail Genre Loading',
}

export class StartGenreLoading implements Action {
  public readonly type = EGenreAction.StartGenreLoading;
}

export class EndGenreLoading implements Action {
  public readonly type = EGenreAction.EndGenreLoading;

  constructor(public payload: Genre[]) {}
}

export class GenreLoadingFail implements Action {
  public readonly type = EGenreAction.FailGenreLoading;

  constructor(public payload: Error) {}
}

export type GenreAction = StartGenreLoading | EndGenreLoading | GenreLoadingFail;
