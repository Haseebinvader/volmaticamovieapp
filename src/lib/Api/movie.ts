import { Movie } from "../Types/movies";

export const fetchMovies = async (page: number): Promise<Movie[]> => {
  const res = await fetch(`https://jsonfakery.com/movies/paginated?page=${page}`);  

  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${res.statusText}`);
  }

  const data = await res.json();
  return data?.data || [];
};
