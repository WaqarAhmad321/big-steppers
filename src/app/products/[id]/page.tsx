import React, { Suspense } from "react";
import ProductDetails from "./_components/product-details";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  return (
    <Suspense fallback={<div className="h-[600px]">Loading..</div>}>
      <ProductDetails id={id} />
    </Suspense>
  );
};

export default ProductDetailPage;
