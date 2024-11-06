import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative pt-20">
      <div className="bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[700px]">
            <div className="space-y-8 py-12">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-medium">
                  New Collection 2024
                </span>
              </div>
              <h1 className="text-6xl font-bold leading-tight font-display">
                Step into Your <br />
                <span className="text-red-600">Perfect Fit</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-md font-light">
                Discover our latest collection of premium footwear designed for
                style and comfort.
              </p>
              <button className="group flex items-center space-x-3 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors">
                <span className="text-lg">Shop Collection</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative h-full">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-600 rounded-full blur-[100px] opacity-30"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600 rounded-full blur-[100px] opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2"
                alt="Featured Shoe"
                className="w-full h-[600px] object-cover object-center rounded-bl-[100px] rounded-tr-[100px] shadow-2xl transform hover:scale-105 transition-transform duration-700"
                // width={800}
                // height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
