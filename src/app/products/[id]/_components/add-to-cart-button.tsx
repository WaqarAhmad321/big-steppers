"use client";

import { ADD_TO_CART, GET_CART } from "@/graphql/queries/cart-queries";
import { useMutation, useQuery } from "@apollo/client";
import { ShoppingBag } from "lucide-react";

interface AddToCartButtonProps {
  productId: string;
  quantity: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  quantity,
}) => {
  const onAddToCart = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cart/add-item`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cart-Token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidF9lYTE4YzU1NjRlZGNlMzFkNzg0YjI0YTg3ZDdkN2EiLCJleHAiOjE3MzI4NzQzMTIsImlzcyI6IndjXC9zdG9yZSIsImlhdCI6MTczMjcwMTUxMn0.SDi3Z-VJw_C5tz_Y0qH37Ldkjid8o_RvxUNZ5NLoHbk",
        },
        credentials: "include",
        body: JSON.stringify({
          id: productId,
          quantity: 1,
        }),
      }
    );
    console.log("cart after: ", await data.json());
  };

  return (
    <div className="space-y-4">
      <button
        onClick={onAddToCart}
        className="w-full bg-red-600 text-white py-4 px-6 rounded-md font-medium hover:bg-red-700 transition-all hover:scale-[1.02] flex items-center justify-center space-x-2">
        <ShoppingBag className="h-5 w-5" />
        <span>Add to Cart</span>
      </button>
      <button className="w-full bg-black text-white py-4 px-6 rounded-md font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02]">
        Buy Now
      </button>
    </div>
  );
};

export default AddToCartButton;
