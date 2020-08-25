import { GenreState, initialGenreState } from '../states';
import { GenreAction, EGenreAction } from '../actions';

export function genreReducer(state = initialGenreState, action: GenreAction): GenreState {
  switch (action.type) {
    case EGenreAction.StartGenreLoading:
      return {
        ...state,
        loading: true,
      };
    case EGenreAction.EndGenreLoading:
      return {
        ...state,
        loading: false,
        genre: action.payload,
      };
    default:
      return state;
  }
}
