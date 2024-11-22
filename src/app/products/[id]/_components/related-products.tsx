import Image from "next/image";
import Link from "next/link";

const RelatedProducts = () => {
  return (
    <div className="mt-16 border-t pt-16">
      <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, index) => (
          <Link
            href={`/product/1`}
            key={index}
            className="group cursor-pointer">
            <div className="aspect-square rounded-lg overflow-hidden bg-neutral-100 mb-4">
              <Image
                src={`https://images.unsplash.com/photo-${
                  1595950653106 + index
                }-6c9ebd614d3a?w=400&q=80`}
                alt="Related product"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width={400}
                height={400}
              />
            </div>
            <h3 className="font-medium text-neutral-900 group-hover:text-red-600 transition-colors">
              Similar Style Shoe
            </h3>
            <p className="text-neutral-600">$179.99</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
