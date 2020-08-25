import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Logger {
  error(error: Error, message?: string): Observable<void>;
  info(message: string);
}

@Injectable({
  providedIn: 'root',
})
export abstract class LoggerService implements Logger {
  abstract error(error: Error, message?: string): Observable<void>;
  abstract info(message: string): Observable<void>;
}
