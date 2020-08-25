import { Author } from '../../enitities';

export interface AuthorsState {
  authors: Author[];
  loading: boolean;
}

export const initialAuthorsState: AuthorsState = {
  authors: [],
  loading: false,
};
