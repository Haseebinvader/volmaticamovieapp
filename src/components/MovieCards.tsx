import { MovieCardProps } from '@/lib/Types/movies';
import React from 'react';
import { useRouter } from 'next/navigation';

const MovieCard: React.FC<MovieCardProps> = ({
  posterUrl,
  title,
  year,
  genre,
  imdbRating,
  runtime,
  imdbID,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/explore/movies/now-showing/${imdbID}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="relative group w-full max-w-xs overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <img
        src={posterUrl}
        alt={title}
        className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100" />
      <div className="absolute bottom-0 w-full p-4 z-10 text-white">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <div className="text-xs text-gray-200 flex justify-between mt-1">
          <span>{year}</span>
          <span>{runtime}</span>
        </div>
        <div className="mt-1 text-sm text-red-300">
          {imdbRating}
        </div>
        <div className="text-xs text-gray-300 mt-1 truncate">
          {genre}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
