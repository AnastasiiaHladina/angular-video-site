import { Injectable } from '@angular/core';
import { selectGenreList } from '../../store/selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states';
import { StartGenreLoading } from '../../store/actions';

@Injectable({
  providedIn: 'root',
})
export class GenreStoreFacadeService {
  genreList$ = this.store.select(selectGenreList);

  constructor(private store: Store<AppState>) { }

  dispatchGenre() {
    this.store.dispatch(new StartGenreLoading());
  }
}
