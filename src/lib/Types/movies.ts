export interface Movie {
  id: number;
  original_title: string;
  original_language: string;
  popularity: number;
  releaseDate: string;
  poster_path: string;
}

export interface MovieCardProps {
  posterUrl: string;
  originalTitle: string;
  originalLanguage: string;
  popularity: number;
  releaseDate: string;
}