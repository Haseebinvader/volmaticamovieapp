'use client';

import { useQuery } from '@tanstack/react-query';
import { useState, useRef, useEffect } from 'react';

import { CarouselPlugin } from "@/components/Carousel";
import { bg1, bg2, bg3 } from "../graphics";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCards";
import { searchMovies } from "@/lib/Api/movie";
import MovieSkeleton from "@/components/MovieSkeleton";
import { SKELETON_COUNT } from '@/Data';

export default function Home() {
  const images = [bg1, bg2, bg3];
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const searchResultsRef = useRef<HTMLElement>(null);

  const {
    data: searchResults = [],
    isLoading: isSearchLoading,
    error: searchError,
  } = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: () => searchMovies(searchQuery),
    enabled: searchQuery.length > 0 && isSearching,
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
  };  

  useEffect(() => {
    if (searchQuery && searchResultsRef.current && !isSearchLoading) {
      searchResultsRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [searchResults, isSearchLoading, searchQuery]);
  
  return (
    <main className="min-h-screen w-full bg-black text-white">
      
      <section className="relative h-full w-full">
        <CarouselPlugin images={images} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/60 z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            What would you like to watch tonight?
          </h1>
          <SearchBar onSearch={handleSearch} placeholderValue = "Search by title, actor, or genre..." />
        </div>
      </section>

      {searchQuery ? (
        <section ref={searchResultsRef} className="py-12 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Search Results for "{searchQuery}"
            </h2>
            
            {isSearchLoading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-8">
                {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                  <MovieSkeleton key={i} />
                ))}
              </div>
            )}
            
            {searchError && (
              <div className="text-red-400 flex flex-col items-center mb-8">
                <p>Error searching movies</p>
              </div>
            )}
            
            {searchResults.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-8">
                {searchResults.map((item) => (
                  <MovieCard
                    key={item.imdbID}
                    posterUrl={item.Images[2]}
                    title={item.title}
                    year={item.year}
                    genre={item.genre}
                    imdbRating={item.imdbRating}
                    runtime={item.runtime}
                    imdbID={item.imdbID}
                  />
                ))}
              </div>
            )}
            
            {searchResults.length === 0 && !isSearchLoading && !searchError  && (
              <div className="text-center text-gray-400 py-12">
                <p>No movies found for "{searchQuery}"</p>
                <p className="text-sm mt-2">Try searching for a different year or movie title</p>
              </div>
            )}
          </div>
        </section>
      ) : ''}
    </main>
  );
}
