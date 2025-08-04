export interface Movie {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Response: string;
  Images: string[];
  ComingSoon?: boolean;
  totalSeasons?: string;
}

export interface MovieCardProps {
  posterUrl: string;
  title: string;
  year: string;
  genre: string;
  imdbRating: string;
  runtime: string;
  imdbID: string;
}