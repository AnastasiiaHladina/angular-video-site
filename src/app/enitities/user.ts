export interface User {
  id: number;
  token: string;
  name: NameModel;
  login: string;
  password: string;
}

export interface NameModel {
  firstName: string;
  lastName: string;
}


