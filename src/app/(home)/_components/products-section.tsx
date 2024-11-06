"use client";

import ProductCard from "@/components/project-cart";
import { useState } from "react";

const categories = [
  "All",
  "Men",
  "Women",
  "Sneakers",
  "Joggers",
  "Limited Edition",
];

const products = [
  {
    id: 1,
    name: "Air Max Pulse",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Sneakers",
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 2,
    name: "Ultra Boost",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
    category: "Running",
    rating: 4.9,
    reviews: 256,
  },
  {
    id: 3,
    name: "Classic Runner",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
    category: "Running",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 4,
    name: "Sport Elite",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570",
    category: "Sports",
    rating: 4.6,
    reviews: 167,
  },
  {
    id: 5,
    name: "Urban Style",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    category: "Casual",
    rating: 4.8,
    reviews: 143,
  },
  {
    id: 6,
    name: "Street Force",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    category: "Street",
    rating: 4.7,
    reviews: 198,
  },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-display mb-4">
          Featured Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium footwear, crafted for
          style and comfort.
        </p>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all z-[100]
            ${
              activeCategory === category
                ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}>
            {category}
          </button>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category={product.category}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
