import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Heart, RotateCcw, Shield, Truck } from "lucide-react";
import ShareButton from "@/app/products/[id]/_components/share-button";

const ProductDetailSkeleton = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="group">
            {/* <ProductSlider images={product.images} /> */}
            <Skeleton className="h-[588px]" />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Skeleton className="h-[35px]" />
              <Skeleton className="h-[30px]" />
              <Skeleton className="h-[98px]" />
              <Skeleton className="h-[50px]" />
              <Skeleton className="h-[50px]" />
            </div>

            {/* Size Selection */}
            {/* <SizeSelection sizes={product.sizes} /> */}

            {/* Quantity */}
            {/* <QuantitySelection quantity={product.quantity} /> */}

            {/* Buttons */}
            {/* <AddToCartButton productId={product.id} quantity={1} /> */}

            {/* Actions */}
            <div className="flex space-x-4 pt-4">
              <button className="flex items-center space-x-2 text-neutral-600 hover:text-red-600 transition-colors">
                <Heart className="h-5 w-5 fill-red-600 stroke-red-600" />
                <span>Save</span>
              </button>
              <ShareButton />
            </div>

            {/* Features */}
            <div className="border-t pt-8 space-y-4">
              <div className="flex items-center space-x-3 text-neutral-600">
                <Truck className="h-5 w-5" />
                <span>Free shipping on orders over Rs.1000</span>
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

        {/* Related Products */}
        {/* <RelatedProducts /> */}
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
