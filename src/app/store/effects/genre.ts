import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadingService } from '../../services/loading/loading.service';
import { Injectable } from '@angular/core';
import { GenreService } from '../../services/genre/genre.service';
import { EGenreAction, EndGenreLoading, GenreLoadingFail } from '../actions';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { Genre } from '../../enitities';
import { of } from 'rxjs';

@Injectable()
export class GenreEffect {
  constructor(private action$: Actions,
              private genreService: GenreService,
              private loadingService: LoadingService) {}

  @Effect()
  getGenre$ = this.action$.pipe(
    ofType(EGenreAction.StartGenreLoading),
    switchMap(() => this.genreService.getGenre()
      .pipe(
        map(({genre}) => {
          return new EndGenreLoading(genre);
        }),
        catchError((err) => of(new GenreLoadingFail(err))),
      )),
    delay(1000),
    tap(() => this.loadingService.setIsVisibleLoading(false)),
  );
}
