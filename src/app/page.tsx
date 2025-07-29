'use client';

import { useQuery } from '@tanstack/react-query';

import { CarouselPlugin } from "@/components/Carousel";
import { bg1, bg2, bg3 } from "../graphics";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const images = [bg1, bg2, bg3];

  
  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-full w-full">
        <CarouselPlugin images={images} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/60 z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            What would you like to watch tonight?
          </h1>
          <SearchBar />
        </div>
      </section>
    </main>
  );
}
