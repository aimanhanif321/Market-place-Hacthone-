"use client"


import { useState, useEffect } from "react";
import { getCategories, getProductsByCategory } from "@/sanity/lib/data";
import Image from "next/image";
type Category = {
  _id: string;
  title: string;
  description?: string;
};

// Define a type for Product
type Product = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
};
const ShopPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  // Fetch products whenever the selected category changes
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductsByCategory(selectedCategory);
      setProducts(data);
    };
    fetchProducts( );
  }, [selectedCategory]);
 



  return (
    <div>
         <div>
//         <Image
          src={"/images/shop.png"}
          alt="shop"
          width={1440}
          height={316}
          className="w-full h-auto mt-0"
        />
      </div>
           <div className="h-auto bg-[#F9F1E7] flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4">
                 <div className="flex flex-wrap items-center justify-center sm:justify-evenly space-x-4 sm:space-x-8 w-full">
                     <Image
                        src="/images/filter.png"
                        alt="dotted-line"
                        width={25}
                        height={25}
                    />
                    {/* <h3 className="text-[14px] sm:text-[18px] md:text-[20px] font-semibold">Filter</h3> */}
                    {/* <Image
                        src="/images/4dot.png"
                        alt="four-dot"
                        width={25}
                        height={25}
                    /> */}
                     {/* Dropdown for categories */}
      <select
        value={selectedCategory || ""}
        onChange={(e) => setSelectedCategory(e.target.value || null)}
        className="border rounded px-3 py-2 mb-4"
      >
        <option  className="text-[14px] sm:text-[18px] md:text-[20px] font-semibold" value="">Filter</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.title}
          </option>
        ))}
      </select>

                    <Image
                        src="/images/shopicon.png"
                        alt="square-line"
                        width={25}
                        height={25}
                    />
                </div> 
                
                

                 <div className="flex flex-wrap items-center justify-center sm:space-x-4 mt-2 sm:mt-0 w-full lg:max-w-7xl">
                     <span className="text-xs sm:text-sm md:text-base">Showing 1–16 of 32 results</span>
                     <span className="text-xs sm:text-sm md:text-base">Show</span>

                     <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center ">
                         <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">16</h3>
                     </div>
                     <span className="text-xs sm:text-sm md:text-base">Short by</span>

                    <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center ">
                        <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">Default</h3>
                     </div>
                 </div>
            </div>

      {/* Display categories */}
    

             {/* Display products */}
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl mt-8'>
             {/* <div className='w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'> */}
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white flex flex-col h-96"
              >
                {/* Image Section */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                
</div>

                {/* Content Section */}
                <div className="flex flex-col justify-between flex-grow p-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 text-sm">${product.price}</p>
                  </div>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-300">
                    Add to Cart
                  </button>
                </div>
                
    
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found for this category.
            </p>
          )}
        </div>
      </div>
   
  );
};

export default ShopPage
{/* <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>Lolito</h3>
<p className='text-center'>Luxury big sofa</p>
<div className='flex justify-center items-center gap-2'>
    <span className='text-[20px] font-semibold'>Rp 7.000.000</span>
    <span className='text-[16px] line-through text-gray-500'>Rp 3.500.000</span> */}


