"use client";

import { ArrowRight } from "lucide-react";
import React from "react";

const DiscoverButton = () => {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          behavior: "smooth",
          top: document.getElementById("products-section")?.offsetTop - 100
        });
      }}
      className="group flex items-center space-x-3 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors">
      <span className="text-lg">Shop Collection</span>
      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
    </button>
  );
};

export default DiscoverButton;
