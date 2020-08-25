import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadingService } from '../../services/loading/loading.service';
import { Injectable } from '@angular/core';
import { AuthorsService } from '../../services/authors/authors.service';
import { AuthorsLoadingFail, EAuthorsAction, EndAuthorsLoading } from '../actions';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { Author } from '../../enitities';
import { of } from 'rxjs';

@Injectable()
export class AuthorsEffect {
  constructor(private action$: Actions,
              private authorsService: AuthorsService,
              private loadingService: LoadingService) {}

  @Effect()
  getAuthors$ = this.action$.pipe(
    ofType(EAuthorsAction.StartAuthorsLoading),
    switchMap(() => this.authorsService.getAuthors()
      .pipe(
        map(({authors}) => {
          return new EndAuthorsLoading(authors);
        }),
        catchError((err) => of(new AuthorsLoadingFail(err))),
      )),
    delay(1000),
    tap(() => this.loadingService.setIsVisibleLoading(false)),
  );
}
