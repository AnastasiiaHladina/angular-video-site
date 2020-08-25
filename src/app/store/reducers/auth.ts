import { AuthState, initialAuthState } from '../states';
import { AuthActions, EAuthActions } from '../actions';

export function authReducers(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case EAuthActions.LoginEnd:
      return {
        ...state,
        token: action.payload,
      };
    case EAuthActions.EndGettingUserInfo:
      return {
        ...state,
        user: action.payload,
      };
    case EAuthActions.StartLogout:
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
}
