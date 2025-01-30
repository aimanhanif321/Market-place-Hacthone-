// 'use client';

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '@/app/(addtocart)/redux/Features/CartSlice';

// interface AddToCartButtonProps {
//   product: {
//     _id: string;
//     title: string;
//     price: number;
//     imageUrl: string;
//   };
// }

// const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
//   const [quantity, setQuantity] = useState(1);
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     const cartItem = {
//       id: product._id,
//       title: product.title,
//       price: product.price,
//       quantity,
//       imageUrl: product.imageUrl,
//     };
//     dispatch(addToCart(cartItem));
//   };

   

//   return (
//     <button
//       onClick={handleAddToCart}
//       className="w-[123px] h-[64px] rounded-2xl border border-black mt-4 sm:mt-0 sm:ml-3 hover:bg-[#B88E2F] hover:text-white"
//     >
//       Add To Cart
//     </button>
//   );
// };

// export default AddToCartButton;



'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/(addtocart)/redux/Features/CartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddToCartButton({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      title: product.title,
      price: product.price,
      quantity,
      imageUrl: product.imageUrl,
    };

    dispatch(addToCart(cartItem));

    // Show success notification
    toast.success('Your product has been added successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full h-[44px] rounded-2xl border border-gray-800 bg-[#B88E2F] text-white hover:bg-[#A0741E] transition duration-300" >
      Add To Cart
    </button>
  );
}
