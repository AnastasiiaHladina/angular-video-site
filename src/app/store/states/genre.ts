import { Genre } from '../../enitities';

export interface GenreState {
  genre: Genre[];
  loading: boolean;
}

export const initialGenreState: GenreState = {
  genre: [],
  loading: false,
};
