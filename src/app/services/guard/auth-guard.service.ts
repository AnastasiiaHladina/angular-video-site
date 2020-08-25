import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../../store/states';
import { State } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private state: State<AppState>,
              private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.state.getValue().auth.token) {
      return true;
    }

    this.router.navigate(['/authorization']);
    return false;
  }
}
