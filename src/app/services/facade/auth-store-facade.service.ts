import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states';
import { LoginStart, StartLogout, UserCredentials } from '../../store/actions';
import { selectAuthUser, selectIsUserLoggedIn } from '../../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreFacadeService {
  isAuthenticated$ = this.store.select(selectIsUserLoggedIn);
  user$ = this.store.select(selectAuthUser);

  constructor(private store: Store<AppState>) { }

  logout() {
    this.store.dispatch(new StartLogout());
  }

  login(credential: UserCredentials): void {
    this.store.dispatch(new LoginStart(credential));
  }
}
