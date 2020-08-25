import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageKey } from '../../../enums';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken: string = JSON.parse(localStorage.getItem(StorageKey.userToken));

    if (userToken) {
      request = request.clone({
        setHeaders: {
          Authorization: userToken,
        },
      });
    }

    return next.handle(request);
  }
}
