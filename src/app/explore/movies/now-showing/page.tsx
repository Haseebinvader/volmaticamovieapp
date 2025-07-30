'use client';

import MovieCard from '@/components/MovieCards';
import { fetchMovies } from '@/lib/Api/movie';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MovieSkeleton from '@/components/MovieSkeleton';

const SKELETON_COUNT = 8;

const NowShowingPage = () => {
  const [page, setPage] = useState(1);
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();

  // Helps avoid hydration errors by delaying client-only rendering.
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movies', page],
    queryFn: () => fetchMovies(page),
  });

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => prev + 1);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-8">
        {movies.map((item) => (
          <MovieCard
            key={item.id}
            posterUrl={item.poster_path}
            originalTitle={item.original_title}
            originalLanguage={item.original_language}
            popularity={item.popularity}
            releaseDate={item.releaseDate}
          />
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-black font-medium">
          {hasMounted ? `Page ${page}` : '...'}
        </span>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default NowShowingPage;
