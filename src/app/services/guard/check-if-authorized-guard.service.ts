import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../../store/states';
import { State } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class CheckIfAuthorizedGuard implements CanActivate {
  constructor(private state: State<AppState>, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.state.getValue().auth.token) {
      this.router.navigate(['courses']);
      return false;
    }

    return true;
  }
}
