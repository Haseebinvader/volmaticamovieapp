"use client";

import * as React from "react";
import Image, { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CarouselPluginProps {
  images: StaticImageData[];
}

export function CarouselPlugin({ images }: CarouselPluginProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-screen h-screen relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-screen">
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-screen w-screen">
            <div className="h-full w-full">
              <Card className="h-full w-full rounded-none">
                <CardContent className="relative h-full w-full p-0">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
