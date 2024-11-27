import React from "react";

interface PriceRangeSliderProps {
  minPrice: number;
  maxPrice: number;
  currentMin: number;
  currentMax: number;
  onChange: (min: number, max: number) => void;
}

export default function PriceRangeSlider({
  minPrice,
  maxPrice,
  currentMin,
  currentMax,
  onChange,
}: PriceRangeSliderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">$</span>
          <input
            type="number"
            value={currentMin}
            onChange={(e) => onChange(Number(e.target.value), currentMax)}
            className="w-20 px-2 py-1 border rounded-md text-sm"
            min={minPrice}
            max={currentMax}
          />
        </div>
        <span className="text-gray-400">-</span>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">$</span>
          <input
            type="number"
            value={currentMax}
            onChange={(e) => onChange(currentMin, Number(e.target.value))}
            className="w-20 px-2 py-1 border rounded-md text-sm"
            min={currentMin}
            max={maxPrice}
          />
        </div>
      </div>

      <div className="relative">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="absolute h-2 bg-red-600 rounded-full"
            style={{
              left: `${
                ((currentMin - minPrice) / (maxPrice - minPrice)) * 100
              }%`,
              right: `${
                100 - ((currentMax - minPrice) / (maxPrice - minPrice)) * 100
              }%`,
            }}
          />
        </div>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={currentMin}
          onChange={(e) => onChange(Number(e.target.value), currentMax)}
          className="absolute top-0 left-0 w-full h-2 appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-600 [&::-webkit-slider-thumb]:cursor-pointer"
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={currentMax}
          onChange={(e) => onChange(currentMin, Number(e.target.value))}
          className="absolute top-0 left-0 w-full h-2 appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-600 [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>
    </div>
  );
}
