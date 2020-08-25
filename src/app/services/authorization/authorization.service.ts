import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserCredentials } from '../../store/actions';
import { User } from '../../enitities';

export interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private httpClient: HttpClient) {}

  login({ login, password }: UserCredentials): Observable<AuthResponse> {
    if (!(login && password)) {
      throw Error('Invalid credentials');
    }

    return this.httpClient.post<AuthResponse>(`${environment.apiUrl}/auth/login`, { login, password });
  }

  getUserInfo(token: string): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiUrl}/auth/userinfo`, { token });
  }
}
