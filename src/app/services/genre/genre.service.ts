import { Injectable } from '@angular/core';
import { Genre } from '../../enitities';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private httpClient: HttpClient) { }

  getGenre() {
    return this.httpClient.get<{ genre: Genre[] }>('assets/db/genre.db.json');
  }
}
