import React from "react";
import {
  Heart,
  // Share2,
  Truck,
  Shield,
  RotateCcw,
  Star,
  Share2,
  // ShoppingBag,
} from "lucide-react";
import ProductSlider from "@/components/product-slider";
import RelatedProducts from "./related-products";
import AddToCartButton from "./add-to-cart-button";
// import SizeSelection from "./size-selection";
// import QuantitySelection from "./quantity-selection";
import client from "@/lib/apollo-client";
import { GET_PRODUCT } from "@/graphql/queries/get-product";
import { GET_CART } from "@/graphql/queries/cart-queries";
import ShareButton from "./share-button";

export default async function ProductDetails({ id }: { id: string }) {
  const productId = id.split("-").pop();

  const res = await fetch(`${process.env.BASE_URL}/products/${productId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const product = await res.json();
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
              <p className="text-2xl font-medium text-red-600">
                {product.price}
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
              <div
                className="text-neutral-600"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            {/* Size Selection */}
            {/* <SizeSelection sizes={product.sizes} /> */}

            {/* Quantity */}
            {/* <QuantitySelection quantity={product.quantity} /> */}

            {/* Buttons */}
            <AddToCartButton productId={productId!} quantity={1} />

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

        {/* Rest of the content remains the same */}
        {/* Product Features */}
        {/* <div className="mt-16 border-t pt-16">
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
        </div> */}

        {/* Reviews Section */}
        {/* <div className="mt-16 border-t pt-16">
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
        </div> */}

        {/* Related Products */}
        <RelatedProducts />
      </div>
    </div>
  );
}
