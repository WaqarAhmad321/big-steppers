import React from "react";
import ProductDetails from "./_components/product-details";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  return <ProductDetails id={id} />;
};

export default ProductDetailPage;
