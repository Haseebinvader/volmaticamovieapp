import { MovieCardProps } from '@/lib/Types/movies';
import React from 'react';
import Image from 'next/image';

/**
 * MovieCard displays a movie poster and info. Clickable for navigation.
 */
const MovieCard: React.FC<MovieCardProps & { onClick?: () => void }> = ({
  posterUrl,
  originalTitle,
  originalLanguage,
  popularity,
  releaseDate,
  onClick,
}) => {
  return (
    <div
      className="relative group w-full max-w-xs overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <Image
        src={posterUrl || '/fallback.jpg'}
        alt={originalTitle}
        width={300}
        height={380}
        className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-110"
        priority={false}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100" />
      {/* Movie Info */}
      <div className="absolute bottom-0 w-full p-4 z-10 text-white">
        <h3 className="text-lg font-semibold truncate">{originalTitle}</h3>
        <div className="text-xs text-gray-200 flex justify-between mt-1">
          <span>Lang: {originalLanguage}</span>
          <span>{releaseDate}</span>
        </div>
        <div className="mt-1 text-sm text-red-300">
          Popularity: {Math.round(popularity)}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
