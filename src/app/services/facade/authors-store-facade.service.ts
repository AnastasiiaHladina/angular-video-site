import { Injectable } from '@angular/core';
import { selectAuthorsList } from '../../store/selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states';
import { StartAuthorsLoading } from '../../store/actions/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStoreFacadeService {
  authorsList$ = this.store.select(selectAuthorsList);

  constructor(private store: Store<AppState>) { }

  getAuthors() {
    this.store.dispatch(new StartAuthorsLoading());
  }
}
