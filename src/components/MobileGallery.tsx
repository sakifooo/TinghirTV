"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function MobileGallery() {
  const screenshots = PlaceHolderImages.filter(img => img.id.startsWith('app-screenshot-'));

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Mobile Experience</h2>
          <p className="text-muted-foreground">Take a look inside the application UI</p>
        </div>

        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {screenshots.map((shot, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 flex justify-center p-4">
                  <div className="relative w-full aspect-[9/18] rounded-[2.5rem] overflow-hidden border-4 border-white/10 bg-secondary glow-red-hover transition-all">
                    <Image
                      src={shot.imageUrl}
                      alt={shot.description}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-primary/20 hover:bg-primary text-white border-primary/20" />
            <CarouselNext className="bg-primary/20 hover:bg-primary text-white border-primary/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
