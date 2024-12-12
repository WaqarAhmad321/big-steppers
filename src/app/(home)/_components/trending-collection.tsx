import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const collections = [
  {
    title: "Summer Vibes",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    description: "Light & breezy styles for the season",
  },
  {
    title: "Street Culture",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    description: "Urban designs for everyday flex",
  },
  {
    title: "Limited Drops",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    description: "Exclusive releases & collaborations",
  },
];

const TrendingCollection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-display mb-4">
          Trending Collections
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our latest drops and exclusive collaborations
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((collection, index) => (
          <div
            key={collection.title}
            className="group relative overflow-hidden rounded-3xl cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 z-10" />
            <Image
              src={collection.image}
              alt={collection.title}
              className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              width={1600}
              height={1600}
            />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white font-display mb-2">
                {collection.title}
              </h3>
              <p className="text-gray-300 mb-4">{collection.description}</p>
              <div className="flex items-center text-white">
                <span className="text-sm font-medium">Shop Now</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCollection;
