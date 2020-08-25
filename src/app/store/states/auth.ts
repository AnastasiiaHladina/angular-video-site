import { User } from '../../enitities';
import { StorageKey } from '../../enums';

export interface AuthState {
  user: User;
  token: string;
}

export const initialAuthState: AuthState = {
  user: JSON.parse(localStorage.getItem(StorageKey.user)) as User,
  token: JSON.parse(localStorage.getItem(StorageKey.userToken)),
};
