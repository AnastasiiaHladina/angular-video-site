import { AuthorsState, initialAuthorsState } from '../states';
import { AuthorsAction, EAuthorsAction } from '../actions';

export function authorReducer(state = initialAuthorsState, action: AuthorsAction): AuthorsState {
  switch (action.type) {
    case EAuthorsAction.StartAuthorsLoading:
      return {
        ...state,
        loading: true,
      };
    case EAuthorsAction.EndAuthorsLoading:
      return {
        ...state,
        loading: false,
        authors: action.payload,
      };
    default:
      return state;
  }
}
