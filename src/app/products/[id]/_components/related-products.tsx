import Image from "next/image";
import Link from "next/link";

const RelatedProducts = async () => {
  const res = await fetch(
    `https://big-steppers.manufacs.com/wp-json/wc/store/v1/products`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const products = await res.json();

  if (!products) {
    return <h1>No product found!</h1>;
  }

  return (
    <div className="mt-16 border-t pt-16">
      <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products
          ?.slice(0, 4)
          .map(({ id, name, prices, images, slug }, index) => (
            <Link
              href={`/product/${slug}-${id}`}
              key={id}
              className="group cursor-pointer">
              <div className="aspect-square rounded-lg overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src={`${images[0].src}`}
                  alt="Related product"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={400}
                />
              </div>
              <h3 className="font-medium text-neutral-900 group-hover:text-red-600 transition-colors">
                {name}
              </h3>
              <p className="text-neutral-600">Rs. {prices.price}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
