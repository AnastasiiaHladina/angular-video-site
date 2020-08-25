export interface Course {
  id: string;
  name: string;
  img: string;
  url: string;
  description: string;
  genre: Genre[];
  isTopRated: boolean;
  length: number;
  date: Date;
  authors: Author[];
}
export interface Author {
  id: string;
  name: string;
  selected: boolean;
}

export interface Genre {
  id: string;
  name: string;
}
