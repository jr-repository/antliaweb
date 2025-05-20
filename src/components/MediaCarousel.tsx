
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
}

interface MediaCarouselProps {
  items: MediaItem[];
  className?: string;
}

const MediaCarousel = ({ items, className = "" }: MediaCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className={`w-full ${className}`}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0 aspect-video relative">
                {item.type === "image" ? (
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full relative group">
                    <img 
                      src={item.thumbnail || item.src} 
                      alt={item.alt} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                      <button className="bg-antlia-blue/90 text-white p-3 rounded-full hover:bg-antlia-blue transition-colors">
                        <Play className="w-8 h-8" fill="white" />
                      </button>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-medium">{item.alt}</h3>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-end gap-2 mt-4">
        <CarouselPrevious className="relative static" />
        <CarouselNext className="relative static" />
      </div>
    </Carousel>
  );
};

export default MediaCarousel;
