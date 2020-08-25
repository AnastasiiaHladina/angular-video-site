import { Injectable } from '@angular/core';
import { Author } from '../../enitities';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {

  constructor(private httpClient: HttpClient) { }

  getAuthors() {
    return this.httpClient.get<{ authors: Author[] }>('assets/db/authors.db.json');
  }
}
