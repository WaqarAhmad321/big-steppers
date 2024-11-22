import ProductCard from "@/components/project-cart";
import { GET_CART } from "@/graphql/queries/cart-queries";
import { GET_PRODUCTS } from "@/graphql/queries/get-products";
import client from "@/lib/apollo-client";

// const categories = [
//   "All",
//   "Men",
//   "Women",
//   "Sneakers",
//   "Joggers",
//   "Limited Edition",
// ];

const ProductsSection = async () => {
  // const [activeCategory, setActiveCategory] = useState("All");
  const { data } = await client.query({
    query: GET_PRODUCTS,
    variables: { first: 4 },
  });
  // const { data: cart } = await client.query({
  //   query: GET_CART,
  //   variables: { first: 4 },
  // });

  const products = data.products.nodes;

  console.log(products);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div id="products-section" className="text-center mb-12">
        <h2 className="text-4xl font-bold font-display mb-4">
          Featured Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium footwear, crafted for
          style and comfort.
        </p>
      </div>

      {/* <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all
            ${
              activeCategory === category
                ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}>
            {category}
          </button>
        ))}
      </div> */}

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image.sourceUrl}
            category={product.productCategories.nodes[0].name}
            slug={product.slug}
            // rating={product.rating}
            // reviews={product.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
