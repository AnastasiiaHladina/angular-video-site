import { Action } from '@ngrx/store';
import { User } from '../../enitities';

export enum EAuthActions {
  LoginStart = '[Auth] Login Start',
  LoginEnd = '[Auth] Login End',
  LoginFail = '[Auth] Login Fail',
  StartGettingUserInfo = '[Auth] Start Getting User Info',
  EndGettingUserInfo = '[Auth] End Getting User Info',
  StartLogout = '[Auth] Start Logout',
  EndLogout = '[Auth] End Logout',
}

export interface UserCredentials {
  login: string;
  password: string;
}

export class LoginStart implements Action {
  public readonly type = EAuthActions.LoginStart;

  constructor(public payload: UserCredentials) {
  }
}

export class LoginEnd implements Action {
  public readonly type = EAuthActions.LoginEnd;

  constructor(public payload: string) {}
}

export class LoginFail implements Action {
  public readonly type = EAuthActions.LoginFail;

  constructor(public payload: Error) {}
}

export class StartGettingUserInfo implements Action {
  public readonly type = EAuthActions.StartGettingUserInfo;

  constructor(public token: string) {}
}

export class EndGettingUserInfo implements Action {
  public readonly type = EAuthActions.EndGettingUserInfo;

  constructor(public payload: User) {}
}

export class StartLogout implements Action {
  public readonly type = EAuthActions.StartLogout;
}

export class EndLogout implements Action {
  public readonly type = EAuthActions.EndLogout;
}

export type AuthActions = LoginStart | LoginEnd | StartGettingUserInfo | EndGettingUserInfo | StartLogout | EndLogout;
