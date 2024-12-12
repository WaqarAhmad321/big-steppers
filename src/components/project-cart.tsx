import React from "react";
import { ShoppingBag, Heart, Star } from "lucide-react";
import Link from "next/link";
import ProductCardImageSlider from "./product-card-slider";
import AddToCartCardButton from "./addtocart-card-button";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  slug: string;
  images: string[];
  category?: string;
  rating?: number;
  reviews?: number;
}

export default function ProductCard({
  id,
  name,
  price,
  images,
  slug,
  category,
  rating,
  reviews,
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl">
        <ProductCardImageSlider images={images} id={id} slug={slug} />

        {category && (
          <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-900">
            {category}
          </span>
        )}
        <div className="absolute top-4 right-4 space-y-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-red-600 hover:text-white transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <AddToCartCardButton productId={id} quantity={1} />
        </div>
      </div>

      <Link href={`/products/${slug}-${id}`} className="group">
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-medium text-gray-900 font-display">
            {name}
          </h3>
          <div className="flex items-center space-x-2">
            {rating && (
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="ml-1 text-sm text-gray-600">{rating}</span>
              </div>
            )}
            {reviews && (
              <span className="text-sm text-gray-500">({reviews} reviews)</span>
            )}
          </div>
          <p className="text-red-600 font-semibold">Rs. {price}</p>
        </div>
      </Link>
    </div>
  );
}
