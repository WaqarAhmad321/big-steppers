// "use client";

// import React, { useState, useEffect } from 'react';
// import { SlidersHorizontal, X } from 'lucide-react';
// import { useParams } from 'next/navigation';
// import { products } from '@/data';
// import FilterSection from './_components/filter-section';
// import PriceRangeSlider from './_components/price-range-slider';
// import FilterCheckbox from '@/components/ui/filter-checkbox';
// import SortDropdown from './_components/sort-dropdown';
// import ProductCard from '@/components/project-cart';

// const sortOptions = [
//   { label: 'Latest', value: 'latest' },
//   { label: 'Price: Low to High', value: 'price_asc' },
//   { label: 'Price: High to Low', value: 'price_desc' },
//   { label: 'Most Popular', value: 'popular' },
//   { label: 'Top Rated', value: 'rating' },
// ];

// const sizes = ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'];
// const conditions = ['New', 'Like New', 'Used - Excellent', 'Used - Good'];
// const brands = ['Nike', 'Adidas', 'New Balance', 'Puma', 'Reebok'];
// const styles = ['Athletic', 'Casual', 'Retro', 'Limited Edition'];
// const colors = ['Black', 'White', 'Red', 'Blue', 'Grey', 'Multi'];

// export default function CategoryPage() {
//   const { category } = useParams();
//   const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
//   const [openSections, setOpenSections] = useState({
//     price: true,
//     size: true,
//     brand: true,
//     style: true,
//     color: true,
//     condition: true,
//   });

//   const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
//   const [selectedColors, setSelectedColors] = useState<string[]>([]);
//   const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });
//   const [sortBy, setSortBy] = useState('latest');

//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [filterCounts, setFilterCounts] = useState(getFilterCounts(products));

//   const toggleSection = (section: keyof typeof openSections) => {
//     setOpenSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   const toggleFilter = (
//     value: string,
//     selected: string[],
//     setSelected: (value: string[]) => void
//   ) => {
//     if (selected.includes(value)) {
//       setSelected(selected.filter((item) => item !== value));
//     } else {
//       setSelected([...selected, value]);
//     }
//   };

//   useEffect(() => {
//     const filtered = filterProducts(products, {
//       category,
//       sizes: selectedSizes,
//       brands: selectedBrands,
//       styles: selectedStyles,
//       colors: selectedColors,
//       conditions: selectedConditions,
//       priceRange,
//       sortBy,
//     });

//     setFilteredProducts(filtered);
//     setFilterCounts(getFilterCounts(filtered));
//   }, [
//     category,
//     selectedSizes,
//     selectedBrands,
//     selectedStyles,
//     selectedColors,
//     selectedConditions,
//     priceRange,
//     sortBy,
//   ]);

//   const Filters = () => (
//     <>
//       <FilterSection
//         title="Price Range"
//         isOpen={openSections.price}
//         onToggle={() => toggleSection('price')}
//       >
//         <PriceRangeSlider
//           minPrice={0}
//           maxPrice={300}
//           currentMin={priceRange.min}
//           currentMax={priceRange.max}
//           onChange={(min, max) => setPriceRange({ min, max })}
//         />
//       </FilterSection>

//       <FilterSection
//         title="Size"
//         isOpen={openSections.size}
//         onToggle={() => toggleSection('size')}
//       >
//         <div className="grid grid-cols-2 gap-2">
//           {sizes.map((size) => (
//             <FilterCheckbox
//               key={size}
//               label={size}
//               checked={selectedSizes.includes(size)}
//               onChange={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
//               count={filterCounts.sizes.get(size) || 0}
//             />
//           ))}
//         </div>
//       </FilterSection>

//       <FilterSection
//         title="Brand"
//         isOpen={openSections.brand}
//         onToggle={() => toggleSection('brand')}
//       >
//         {brands.map((brand) => (
//           <FilterCheckbox
//             key={brand}
//             label={brand}
//             checked={selectedBrands.includes(brand)}
//             onChange={() => toggleFilter(brand, selectedBrands, setSelectedBrands)}
//             count={filterCounts.brands.get(brand) || 0}
//           />
//         ))}
//       </FilterSection>

//       <FilterSection
//         title="Style"
//         isOpen={openSections.style}
//         onToggle={() => toggleSection('style')}
//       >
//         {styles.map((style) => (
//           <FilterCheckbox
//             key={style}
//             label={style}
//             checked={selectedStyles.includes(style)}
//             onChange={() => toggleFilter(style, selectedStyles, setSelectedStyles)}
//             count={filterCounts.styles.get(style) || 0}
//           />
//         ))}
//       </FilterSection>

//       <FilterSection
//         title="Color"
//         isOpen={openSections.color}
//         onToggle={() => toggleSection('color')}
//       >
//         <div className="grid grid-cols-2 gap-2">
//           {colors.map((color) => (
//             <FilterCheckbox
//               key={color}
//               label={color}
//               checked={selectedColors.includes(color)}
//               onChange={() => toggleFilter(color, selectedColors, setSelectedColors)}
//               count={filterCounts.colors.get(color) || 0}
//             />
//           ))}
//         </div>
//       </FilterSection>

//       <FilterSection
//         title="Condition"
//         isOpen={openSections.condition}
//         onToggle={() => toggleSection('condition')}
//       >
//         {conditions.map((condition) => (
//           <FilterCheckbox
//             key={condition}
//             label={condition}
//             checked={selectedConditions.includes(condition)}
//             onChange={() =>
//               toggleFilter(condition, selectedConditions, setSelectedConditions)
//             }
//             count={filterCounts.conditions.get(condition) || 0}
//           />
//         ))}
//       </FilterSection>
//     </>
//   );

//   return (
//     <div className="min-h-screen pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex items-center justify-between mb-8">
//           <h1 className="text-3xl font-bold font-display">
//             {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Shoes'}
//           </h1>
//           <div className="flex items-center space-x-4">
//             <SortDropdown
//               options={sortOptions}
//               value={sortBy}
//               onChange={setSortBy}
//             />
//             <button
//               onClick={() => setIsMobileFiltersOpen(true)}
//               className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
//             >
//               <SlidersHorizontal className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div className="lg:grid lg:grid-cols-4 lg:gap-8">
//           {/* Desktop Filters */}
//           <div className="hidden lg:block">
//             <div className="sticky top-24 space-y-1">
//               <Filters />
//             </div>
//           </div>

//           {/* Mobile Filters */}
//           <div
//             className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden transition-all duration-300
//               ${isMobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//             onClick={(e) => {
//               if (e.target === e.currentTarget) {
//                 setIsMobileFiltersOpen(false);
//               }
//             }}
//           >
//             <div
//               className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-spring
//                 ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}
//             >
//               <div className="flex items-center justify-between p-4 border-b">
//                 <h2 className="text-lg font-semibold">Filters</h2>
//                 <button
//                   onClick={() => setIsMobileFiltersOpen(false)}
//                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>
//               <div className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
//                 <Filters />
//               </div>
//             </div>
//           </div>

//           {/* Product Grid */}
//           <div className="lg:col-span-3">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {/* {filteredProducts.map((product) => (
//                 <ProductCard key={product.id} {...product} />
//               ))} */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }