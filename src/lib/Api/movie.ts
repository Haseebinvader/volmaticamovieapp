import { Movie } from "../Types/movies";

//API to get the Movies Data
export const fetchMovies = async (): Promise<Movie[]> => {
  const res = await fetch(`https://www.apirequest.in/movie/api`);  

  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${res.statusText}`);
  }

  const data = await res.json();
  return data || [];
};

// API to get the searched results
export const searchMovies = async (query: string): Promise<Movie[]> => {

  const allMovies = await fetchMovies();
  
  const searchTerm = query.toLowerCase();
  return allMovies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm) ||
    movie.genre.toLowerCase().includes(searchTerm) ||
    movie.actors.toLowerCase().includes(searchTerm) ||
    movie.director.toLowerCase().includes(searchTerm) ||
    movie.plot.toLowerCase().includes(searchTerm) ||
    movie.year.includes(searchTerm)
  );
};

// Api to get the Coming Soon Movies
export const CommingSoomMovies = async (): Promise<Movie[]> => {
  const allMovies = await fetchMovies();

  const comingSoonMovies = allMovies.filter(movie => movie.ComingSoon === true);

  return comingSoonMovies;
};
