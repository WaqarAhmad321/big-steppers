import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProductSliderProps {
  images: string[];
}

export default function ProductSlider({ images }: ProductSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-lg bg-neutral-100 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <Image
                src={`${image}?w=1200&q=90`}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-200"
                width={1200}
                height={1200}
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white"
          disabled={isTransitioning}>
          <ChevronLeft className="h-6 w-6 text-neutral-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white"
          disabled={isTransitioning}>
          <ChevronRight className="h-6 w-6 text-neutral-600" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`relative aspect-square rounded-lg overflow-hidden transition-transform hover:scale-105 ${
              currentSlide === index ? "ring-2 ring-red-600" : ""
            }`}
            disabled={isTransitioning}>
            <img
              src={`${image}?w=200&q=80`}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {currentSlide === index && (
              <div className="absolute inset-0 bg-white/10" />
            )}
          </button>
        ))}   
      </div>
    </div>
  );
}
