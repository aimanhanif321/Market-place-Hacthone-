'use client';


import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../(addtocart)/redux/Features/CartSlice'; // Import the addToCart action
import { getProductById } from '@/sanity/lib/data';
import RelatedProducts from '@/components/RelatedProduct/page';
import { truncateDescription } from '@/sanity/lib/data';
export default function Page({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  // State to store unwrapped params
  const [params, setParams] = useState<{ slug: string } | null>(null);

  useEffect(() => {
    // Unwrap the params Promise
    paramsPromise.then((resolvedParams) => {
      setParams(resolvedParams);
    });
  }, [paramsPromise]);

  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params) {
      const fetchProduct = async () => {
        try {
          const productData = await getProductById(params.slug); // Fetch product using slug
          setProduct(productData);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };

      fetchProduct();
    }
  }, [params]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      title: product.title,
      price: product.price,
      quantity,
      imageUrl: product.imageUrl,
    };
    dispatch(addToCart(cartItem));
  };
  return (
    <>
      {/* Product content */}
      <div className="flex flex-col lg:flex-row items-start justify-evenly mt-16 px-4 lg:px-24 gap-12">
        {/* Product Image */}
        <div className="bg-[#F9F1E7] w-full lg:w-1/2 lg:h-[600px] h-auto flex items-center justify-center p-4 rounded-md">
          <Image src={product.imageUrl} alt={product.title} width={500} height={700} className="max-w-full h-[392px]" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col max-w-lg">
          <h1 className="text-4xl font-semibold mb-2">{product.title}</h1>
          <span className="text-2xl text-black">${product.price}</span>
          <div className="">
            <p className="text-gray-700 text-sm mt-4">{truncateDescription(product.description, 150)}</p>
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
  {product.tags?.length ? (
    product.tags.map((tag:string[], index:string) => (
      <span
        key={index}
        className="text-sm bg-slate-400 text-black rounded-full px-2 py-1"
      >
        {tag}
      </span>
    ))
  ) : (
    <p className="text-sm text-gray-500">No tags available</p>
  )}
</div>

          {/* Quantity Selection */}
          <div className="flex items-center gap-3 mt-6">
            <button
              className="px-3 border border-gray-400 rounded"
              onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-3 border border-gray-400 rounded"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
<div className='flex mt-10'>
          {/* Add to Cart Button */}
         <div> <Link href="/Cart">
            <button
              onClick={handleAddToCart}
              className="w-[123px] h-[64px] rounded-2xl border border-black mt-4 sm:mt-0 sm:ml-3 hover:bg-[#B88E2F] hover:text-white"
            >
              Add To Cart
            </button>
          </Link>
</div>
          {/* Compare Button */}
        <div>  <Link href="/ProPage">
            <button className="w-52 h-16  hover:bg-[#B88E2F] hover:text-white bg-transparent text-black rounded-2xl border border-black flex items-center justify-center gap-2 mt-4 sm:mt-0 sm:ml-3">
              <span>
                <Plus />
              </span>
              <span>Compare</span>
            </button>
          </Link>
          </div>

          </div>
        </div>
        
      </div>
      <RelatedProducts
  currentProductId={product._id}
/>

    
    </>
  );
}


