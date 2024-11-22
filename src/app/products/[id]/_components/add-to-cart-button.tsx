"use client";

import { ProductDetails } from "@/app/types";
import { useCart } from "@/contexts/cart-context";
import { ADD_TO_CART, GET_CART } from "@/graphql/queries/cart-queries";
import { useMutation } from "@apollo/client";
import { ShoppingBag } from "lucide-react";

interface AddToCartButtonProps {
  productId: string;
  quantity: number;
}

const decodeGlobalID = (globalID) => {
  try {
    const decodedURL = decodeURIComponent(globalID); // Decode URL-encoded string
    const decodedString = atob(decodedURL); // Decode Base64
    const id = decodedString.split(":")[1]; // Extract numeric ID
    return parseInt(id, 10); // Convert to integer
  } catch (error) {
    console.error("Error decoding ID:", globalID, error);
    throw new Error("Invalid encoded ID. Ensure it is URL and Base64 encoded.");
  }
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  quantity,
}) => {
  const numericProductId = decodeGlobalID(productId); // Decode Base64 ID
  const [addToCart, { data, loading, error }] = useMutation(ADD_TO_CART);
 
  if (data) console.log("data is: ", data);

  if (error) console.log("error is: ", error);

  const onAddToCart = async () => {
    await addToCart({
      variables: {
        productId: numericProductId,
        quantity,
      },
      refetchQueries: [{ query: GET_CART }],
    });
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
