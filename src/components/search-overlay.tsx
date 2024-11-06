import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div
      className={`fixed inset-0 bg-black/95 z-50 transition-all duration-300 
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
        />

        <div className="mt-8">
          <h3 className="text-white/60 text-sm font-medium mb-4">
            TRENDING SEARCHES
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Air Max", "Running Shoes", "Basketball", "Limited Edition"].map(
              (term) => (
                <button
                  key={term}
                  className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-red-600 transition-colors">
                  {term}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
