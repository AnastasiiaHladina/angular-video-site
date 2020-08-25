import { Action } from '@ngrx/store';
import { Author } from '../../enitities';

export enum EAuthorsAction {
  StartAuthorsLoading = '[Course Page] Start Authors Loading',
  EndAuthorsLoading = '[Course Page] End Authors Loading',
  FailAuthorsLoading = '[Course Page] Fail Authors Loading',
}

export class StartAuthorsLoading implements Action {
  public readonly type = EAuthorsAction.StartAuthorsLoading;
}

export class EndAuthorsLoading implements Action {
  public readonly type = EAuthorsAction.EndAuthorsLoading;

  constructor(public payload: Author[]) {}
}

export class AuthorsLoadingFail implements Action {
  public readonly type = EAuthorsAction.FailAuthorsLoading;

  constructor(public payload: Error) {}
}

export type AuthorsAction = StartAuthorsLoading | EndAuthorsLoading | AuthorsLoadingFail;
