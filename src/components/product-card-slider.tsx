"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ProductCardImageSliderProps {
  images: string[];
  slug: string;
  id: number;
}

const ProductCardImageSlider = ({
  images,
  slug,
  id,
}: ProductCardImageSliderProps) => {
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
    <div className="relative aspect-square rounded-lg bg-neutral-100 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image: any, index: number) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <Link href={`/products/${slug}-${id}`}>
              <Image
                src={`${image.thumbnail}`}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                width={400}
                height={400}
              />
            </Link>
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
  );
};

export default ProductCardImageSlider;
