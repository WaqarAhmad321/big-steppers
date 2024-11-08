"use client";

import React, { useState } from "react";
import {
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Star,
  ShoppingBag,
} from "lucide-react";
import ProductSlider from "@/components/product-slider";

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("Red/Black");
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Air Stepper Pro Max",
    price: 199.99,
    description:
      "Experience unparalleled comfort and style with the Air Stepper Pro Max. Featuring our innovative cushioning technology and premium materials, these shoes are designed for those who demand both performance and aesthetics.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Red/Black", "White/Red", "Triple Black"],
    features: [
      "Responsive cushioning technology",
      "Breathable mesh upper",
      "Durable rubber outsole",
      "Premium leather accents",
    ],
    reviews: [
      {
        id: 1,
        author: "John D.",
        rating: 5,
        comment: "Best running shoes I've ever owned!",
      },
      {
        id: 2,
        author: "Sarah M.",
        rating: 4,
        comment: "Very comfortable, but took a few days to break in.",
      },
      {
        id: 3,
        author: "Mike R.",
        rating: 5,
        comment: "Perfect fit and amazing style!",
      },
    ],
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="group">
            <ProductSlider images={product.images} />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-neutral-900">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-red-600">
                ${product.price}
              </p>
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-neutral-600">(128 reviews)</span>
              </div>
              <p className="text-neutral-600">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-neutral-900">Color</h3>
              <div className="flex flex-wrap gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md transition-all ${
                      selectedColor === color
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                    }`}>
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-neutral-900">
                  Select Size
                </h3>
                <button className="text-sm text-red-600 hover:text-red-700">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 text-sm font-medium rounded-md border transition-all ${
                      selectedSize === size
                        ? "border-red-600 bg-red-50 text-red-600"
                        : "border-neutral-200 text-neutral-900 hover:border-red-600"
                    }`}>
                    US {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-neutral-900">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-2 text-neutral-600 hover:text-neutral-900">
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-2 text-neutral-600 hover:text-neutral-900">
                    +
                  </button>
                </div>
                <span className="text-sm text-neutral-600">
                  {product.sizes.length} items in stock
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-red-600 text-white py-4 px-6 rounded-md font-medium hover:bg-red-700 transition-all hover:scale-[1.02] flex items-center justify-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              <button className="w-full bg-black text-white py-4 px-6 rounded-md font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02]">
                Buy Now
              </button>
            </div>

            {/* Actions */}
            <div className="flex space-x-4 pt-4">
              <button className="flex items-center space-x-2 text-neutral-600 hover:text-red-600 transition-colors">
                <Heart className="h-5 w-5" />
                <span>Save</span>
              </button>
              <button className="flex items-center space-x-2 text-neutral-600 hover:text-red-600 transition-colors">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>

            {/* Features */}
            <div className="border-t pt-8 space-y-4">
              <div className="flex items-center space-x-3 text-neutral-600">
                <Truck className="h-5 w-5" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-600">
                <Shield className="h-5 w-5" />
                <span>2-year warranty</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-600">
                <RotateCcw className="h-5 w-5" />
                <span>30-day free returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the content remains the same */}
        {/* Product Features */}
        <div className="mt-16 border-t pt-16">
          <h2 className="text-2xl font-bold mb-8">Product Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-semibold">
                    {index + 1}
                  </span>
                </div>
                <p className="text-neutral-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 border-t pt-16">
          <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
          <div className="space-y-8">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b pb-8">
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-neutral-900 font-medium mb-2">
                  {review.author}
                </p>
                <p className="text-neutral-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 border-t pt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="group">
                <div className="aspect-square rounded-lg overflow-hidden bg-neutral-100 mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      1595950653106 + index
                    }-6c9ebd614d3a?w=400&q=80`}
                    alt="Related product"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-neutral-900 group-hover:text-red-600 transition-colors">
                  Similar Style Shoe
                </h3>
                <p className="text-neutral-600">$179.99</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
