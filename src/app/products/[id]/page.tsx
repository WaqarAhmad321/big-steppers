import React, { Suspense } from "react";
import ProductDetails from "./_components/product-details";
import ProductDetailSkeleton from "@/components/skeletons/product-detail-skeleton";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductDetails id={id} />
    </Suspense>
  );
};

export default ProductDetailPage;
