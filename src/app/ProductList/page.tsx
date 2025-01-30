"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import WishlistButton from "@/components/WishlistButton/page";
import Image from "next/image";
import { truncateDescription } from "@/sanity/lib/data";
import AddToCartButton from "@/components/AddCartButton/page";



// Define Product type
export interface Product {
  _id: string;
  title: string;
  description: string;
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
        description,
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
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


 

  // Handle Add to Cart for the Product Listing Page


  
    return (
      <div className="mt-20">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Our Products</h1>
  
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
          {currentProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white p-6 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative flex justify-center items-center bg-gray-100 rounded-lg w-full h-64 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
  
              {/* Product Info */}
              <div className="flex flex-col mt-4">
                <h1 className="text-xl font-semibold text-gray-900">{product.title}</h1>
                <p className="text-sm text-gray-600 mt-2">{truncateDescription(product.description, 25)}</p>
  
                <div className="mt-3 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900">Rp: {product.price}$</h3>
                  {product.discountPercentage && (
                    <p className="text-sm text-red-500">{product.discountPercentage}% off</p>
                  )}
                  {product.isNew && (
                    <span className="text-sm font-semibold text-green-600">New!</span>
                  )}
                </div>
              </div>
  
              {/* Tags Section */}
              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags?.length ? (
                  product.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-300 text-gray-800 font-medium rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))
                ) : (
                  <p className="text-xs text-gray-500">No tags available</p>
                )}
              </div>
  
              {/* Buttons Section */}
              <div className="mt-6 flex flex-col gap-4">
                <AddToCartButton product={product} />
  
                <Link href={`/ItemPage/${product._id}`}>
                  <button className="w-full h-[44px] rounded-2xl border border-gray-800 bg-[#B88E2F] text-white hover:bg-[#A0741E] transition duration-300">
                    View Details
                  </button>
                </Link>
  
                <WishlistButton product={product} />
              </div>
            </div>
          ))}
        </div>
  
        {/* Pagination */}
        <div className="flex justify-center items-center mt-10 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-6 py-2 rounded-lg border font-medium ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#B88E2F] text-white hover:bg-[#A0741E] transition duration-300"
            }`}
          >
            Previous
          </button>
  
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${
                currentPage === index + 1
                  ? "bg-[#B88E2F] text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          ))}
  
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-6 py-2 rounded-lg border font-medium ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#B88E2F] text-white hover:bg-[#A0741E] transition duration-300"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductList;
  
