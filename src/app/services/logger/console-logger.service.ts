import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsoleLoggerService implements Logger {
  error(error: Error, message?: string): Observable<void> {
    console.error(message ? message : error);

    return of();
  }

  info(message: string): Observable<void> {
    console.log(message);

    return of();
  }
}
