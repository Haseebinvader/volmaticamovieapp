'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { fetchMovies } from '@/lib/Api/movie';
import { Movie } from '@/lib/Types/movies';

const MovieDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const movieId = params.id as string;

  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: () => fetchMovies(),
  });

  const movie = movies.find((m: Movie) => m.imdbID === movieId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <div className="text-white text-xl mb-4">Movie not found</div>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      <div className="p-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Movies
        </button>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1">
            <img
              src={movie.Poster}
              alt={movie.title}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

         
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            
            
            <div className="flex flex-wrap gap-4 mb-6 text-gray-300">
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm hover:bg-amber-500 cursor-pointer">
                {movie.year}
              </span>
              <span className="bg-green-600 px-3 py-1 rounded-full text-sm cursor-pointer">
                {movie.rated}
              </span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm cursor-pointer">
                {movie.runtime}
              </span>
              <span className="bg-yellow-600 px-3 py-1 rounded-full text-sm cursor-pointer">
                {movie.imdbRating}
              </span>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Plot</h2>
              <p className="text-gray-300 leading-relaxed">{movie.plot}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Genre</h2>
              <p className="text-gray-300">{movie.genre}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Director</h2>
              <p className="text-gray-300">{movie.director}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Writer</h2>
              <p className="text-gray-300">{movie.writer}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Cast</h2>
              <p className="text-gray-300">{movie.actors}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Language</h2>
                <p className="text-gray-300">{movie.language}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Country</h2>
                <p className="text-gray-300">{movie.Country}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Release Date</h2>
                <p className="text-gray-300">{movie.released}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">IMDb Votes</h2>
                <p className="text-gray-300">{movie.imdbVotes}</p>
              </div>
            </div>
            {movie.Awards && movie.Awards !== "N/A" && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Awards</h2>
                <p className="text-gray-300">{movie.Awards}</p>
              </div>
            )}
            {movie.Metascore && movie.Metascore !== "N/A" && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Metascore</h2>
                <p className="text-gray-300">{movie.Metascore}</p>
              </div>
            )}
          </div>
        </div>
        {movie.Images && movie.Images.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {movie.Images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${movie.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailPage;
