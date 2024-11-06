import { Award, TrendingUp, Truck } from "lucide-react";
import React from "react";

const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-red-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Trending Styles</h3>
              <p className="text-sm text-gray-500">Latest fashion trends</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-red-100 p-3 rounded-lg">
              <Award className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Premium Quality</h3>
              <p className="text-sm text-gray-500">Guaranteed authenticity</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-red-100 p-3 rounded-lg">
              <Truck className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
              <p className="text-sm text-gray-500">Free shipping worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
