import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadingService } from '../../services/loading/loading.service';
import { EAuthActions, EndGettingUserInfo, EndLogout, LoginEnd, LoginStart, StartCoursesLoading, StartGettingUserInfo } from '../actions';
import { StorageKey } from '../../enums';
import { delay, map, switchMap, tap } from 'rxjs/operators';
import { AuthorizationService, AuthResponse } from '../../services/authorization/authorization.service';
import { of } from 'rxjs';
import { User } from '../../enitities';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffect {
  constructor(
    private action$: Actions, private loadingService: LoadingService, private authService: AuthorizationService, private router: Router) {
  }

  @Effect()
  login$ = this.action$.pipe(
    ofType(EAuthActions.LoginStart),
    tap(() => this.loadingService.setIsVisibleLoading(true)),
    switchMap((event: LoginStart) => this.authService.login(event.payload)),
    switchMap((response: AuthResponse) => of(new LoginEnd(response.token))),
  );

  @Effect()
  loginEnd$ = this.action$.pipe(
    ofType(EAuthActions.LoginEnd),
    tap((userToken: LoginEnd) => localStorage.setItem(StorageKey.userToken, JSON.stringify(userToken.payload))),
    switchMap((userToken: LoginEnd) => of(new StartGettingUserInfo(userToken.payload))),
  );

  @Effect()
  startGettingUserInfo$ = this.action$.pipe(
    ofType(EAuthActions.StartGettingUserInfo),
    map((action: StartGettingUserInfo) => action.token),
    switchMap((token: string) => this.authService.getUserInfo(token)),
    switchMap((user: User) => of(new EndGettingUserInfo(user))),
  );

  @Effect()
  endGettingUserInfo$ = this.action$.pipe(
    ofType(EAuthActions.EndGettingUserInfo),
    delay(1000),
    tap((response: EndGettingUserInfo) => {
      localStorage.setItem(StorageKey.user, JSON.stringify(response.payload));
      this.router.navigate(['/courses']);
    }),
    switchMap(() => of(new StartCoursesLoading())),
  );

  @Effect()
  logout$ = this.action$.pipe(
    ofType(EAuthActions.StartLogout),
    tap(() => this.loadingService.setIsVisibleLoading(true)),
    delay(1000),
    tap(() => {
      localStorage.removeItem(StorageKey.userToken);
      localStorage.removeItem(StorageKey.user);
      this.loadingService.setIsVisibleLoading(false);
      this.router.navigate(['/authorization']);
    }),
    switchMap(() => of(new EndLogout())),
  );
}
