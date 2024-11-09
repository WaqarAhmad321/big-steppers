import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { products } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/types";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchResults(
      products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div
      className={`fixed inset-0 hide-scrollbar bg-black/95 z-50 transition-all duration-300 
      ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
    `}>
      <div className="max-w-4xl mx-auto px-4 pt-32">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search for products..."
          className="w-full bg-transparent border-b-2 border-white/20 text-white text-4xl font-light focus:outline-none focus:border-red-600 pb-4 placeholder:text-white/40"
          onChange={handleSearch}
        />

        {
          <div className="mt-8">
            <h3 className="text-white/60 text-sm font-medium mb-4">
              TRENDING SEARCHES
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Air Max",
                "Running Shoes",
                "Basketball",
                "Limited Edition",
              ].map((term) => (
                <button
                  key={term}
                  className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-red-600 transition-colors">
                  {term}
                </button>
              ))}
            </div>
          </div>
        }

        {searchResults.length > 0 ? (
          <div className="mt-4">
            <h3 className="text-white/60 text-sm font-medium mb-4">Results</h3>
            <div className="flex flex-col gap-4">
              {searchResults.map((product, index) => (
                <Link
                  href={`/product/${product.id}`}
                  onClick={onClose}
                  key={index}
                  className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                      width={80}
                      height={80}
                    />

                    <div>
                      <div className="text-white text-2xl mt-2">
                        {product.name}
                      </div>
                      <span className="text-gray-300 text-lg">
                        ${product.price}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="text-white bg-red-600 rounded-md px-4 py-2 transition-colors">
                      View
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-4 text-white/60 text-sm">No results found</div>
        )}
      </div>
    </div>
  );
}
