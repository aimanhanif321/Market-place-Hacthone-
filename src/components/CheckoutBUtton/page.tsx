// import { useRouter } from "next/router";
// import { CartItem } from "@/app/(addtocart)/redux/Features/CartSlice";
// import { CartItem } from "@/app/(addtocart)/redux/types";
// const router = useRouter();

// // Inside the JSX
// <button
//   onClick={() =>
//     router.push({
//       pathname: "/CheckoutPage",
//       query: { data: JSON.stringify(cartItems) }, // Pass cartItems as a query string
//     })
//   }
//   className="w-full lg:w-[222px] h-[48px] lg:h-[58px] rounded-2xl text-[18px] lg:text-[20px] bg-black text-white hover:bg-[#B88E2F] hover:text-black transition-all"
// >
//   Check Out
// </button>;
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Make sure you import useRouter
// import { CartItem } from "@/app/ProductList/page"; // Ensure CartItem type is available



export interface CartItem {
  id: string; 
  title: string; 
  price: number; 
  quantity: number; 
  imageUrl: string; 
}

export interface CartState {
  items: CartItem[];
}
const CheckoutButton = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  // Fetch cart items from localStorage (or a global state if you're using Redux, etc.)
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Handle checkout button click
  const handleCheckout = () => {
    // Ensure cartItems is not empty before proceeding
    if (cartItems.length > 0) {
      router.push({
        pathname: "/CheckoutPage",
        query: { data: JSON.stringify(cartItems) }, // Pass cartItems as a query string
      });
    } else {
      alert("Your cart is empty. Please add items to the cart.");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full lg:w-[222px] h-[48px] lg:h-[58px] rounded-2xl text-[18px] lg:text-[20px] bg-black text-white hover:bg-[#B88E2F] hover:text-black transition-all"
    >
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
