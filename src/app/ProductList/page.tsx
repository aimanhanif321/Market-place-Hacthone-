"use client";


import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import WishlistButton from "@/components/WishlistButton/page";
import Image from "next/image";

// Define Product type
export interface Product {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  tags?: string[];
  discountPercentage?: number;
  isNew?: boolean;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        title,
        "imageUrl": productImage.asset->url,
        price,
        tags,
        discountPercentage,
        isNew
      }`;
      const result = await client.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);

  if (products.length === 0) return <p>Loading...</p>;

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mt-20">
      <h1 className="heading">Our Products</h1>
      <div className="mt-10 relative w-[95%] md:w-[90%] lg:w-[80%] xl:w-[80%] justify-center mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentProducts.map((product) => (
          <div key={product._id} className="border p-4 rounded-md shadow-md">
            <div className="relative cursor-pointer text-center mx-auto bg-[#EAECF0] rounded-lg mb-9 w-[285px] h-[430px]">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-40 md:h-64 lg:h-80 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h1 className="heading3">{product.title}</h1>
                <div className="flex justify-between items-center pt-3">
                  <h3 className="text-[18px] font-bold text-gray-800">
                    Rp: {product.price}$
                  </h3>
                  {product.discountPercentage && (
                    <p className="text-sm text-[#B88E2F]">
                      {product.discountPercentage}% off
                    </p>
                  )}
                  {product.isNew && <span className="text-sm  font-bold ml-2">New!</span>}
                </div>
              </div>
            </div>
            <Link href={`/ItemPage/${product._id}`}>
              <button className="mt-4  bg-[#B88E2F] mb-4 text-white p-2 rounded">View Details</button>
            </Link>
            <WishlistButton product={product} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md border ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#B88E2F] text-white"
          }`}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-2 rounded-md border ${
              currentPage === index + 1 ? "bg-[#B88E2F] text-white" : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md border ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#B88E2F] text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;



// interface ProductListProps {
//   products: any[]; // Replace `any` with the actual type of your product objects
// }
// const ProductList = () => {
//   const [products, setProducts] = useState<any[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const productsPerPage = 8; // Number of products per page

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "product"]{
//         _id,
//         title,
//         "imageUrl": productImage.asset->url,
//         price,
//         tags,
//         discountPercentage,
//         isNew
//       }`;
  
//       const result = await client.fetch(query);
//       setProducts(result);
//     };

//     fetchProducts();
//   }, []);

//   if (products.length === 0) return <p>Loading...</p>;

//   // Calculate the range of products for the current page
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   // Calculate total pages
//   const totalPages = Math.ceil(products.length / productsPerPage);

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="mt-20">
//       <h1 className="heading">Our Products</h1>
//       <div className="mt-10 relative w-[95%] md:w-[90%] lg:w-[80%] xl:w-[80%] justify-center mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {currentProducts.map((product) => (
//           <div key={product._id} className="border p-4 rounded-md shadow-md">
//             <div className="relative cursor-pointer text-center mx-auto bg-[#EAECF0] rounded-lg mb-9 w-[285px] h-[430px]">
//               <img
//                 src={product.imageUrl}
//                 alt={product.title}
//                 className="w-full h-40 md:h-64 lg:h-80 object-cover rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h1 className="heading3">{product.title}</h1>
              
//                 <div className="flex justify-between items-center pt-3">
//                   <h3 className="text-[18px] font-bold text-gray-800">
//                     Rp: {product.price}$
//                   </h3>
//                   {product.discountPercentage && (
//                     <p className="text-sm text-[#B88E2F]">
//                       {product.discountPercentage}% off
//                     </p>
//                   )}
//                   {product.isNew && (
//                     <span className="text-sm  font-bold ml-2">
//                       New!
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <Link href={`/ItemPage/${product._id}`}>
//               <button className="mt-4  bg-[#B88E2F] mb-4 text-white p-2 rounded">
//                 View Details
//               </button>
//             </Link>
//             <WishlistButton product={product} />
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center items-center mt-8 space-x-2">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 rounded-md border ${
//             currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : " bg-[#B88E2F] text-white"
//           }`}
//         >
//           Previous
//         </button>

//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={`px-3 py-2 rounded-md border ${
//               currentPage === index + 1 ? " bg-[#B88E2F] text-white" : "bg-white"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}

//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 rounded-md border ${
//             currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : " bg-[#B88E2F] text-white"
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductList;
