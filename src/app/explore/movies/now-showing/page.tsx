'use client';

import MovieCard from '@/components/MovieCards';
import { fetchMovies } from '@/lib/Api/movie';
import { useQuery } from '@tanstack/react-query';
import MovieSkeleton from '@/components/MovieSkeleton';

const SKELETON_COUNT = 8;

const NowShowingPage = () => {

  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: () => fetchMovies(),
  });

  return (
    <section className="py-12 px-4 md:px-12 bg-white z-20 h-full">
      <h2 className="text-2xl font-bold mb-6 text-black">Now Showing</h2>
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-8">
          {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <MovieSkeleton key={i} />
          ))}
        </div>
      )}
      {error && (
        <div className="text-red-600 flex flex-col items-center mb-8">
          <p>Error loading movies</p>
        </div>
      )}
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-8">
        {movies.map((item) => (
          <MovieCard
            key={item.imdbID}
            posterUrl={item.Images[0]}
            title={item.title}
            year={item.year}
            genre={item.genre}
            imdbRating={item.imdbRating}
            runtime={item.runtime}
            imdbID={item.imdbID}
          />
        ))}
      </div>
    </section>
  );
};

export default NowShowingPage;
