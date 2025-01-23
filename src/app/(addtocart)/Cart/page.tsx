"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/Features/CartSlice";
import Image from "next/image";
import Link from "next/link";
import Feature from "../../../components/Feature/page";

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();

  return (
    <>
      {/* Header Image */}
      <div>
        <Image
          src="/images/cart.png"
          alt="cart-section"
          width={1440}
          height={316}
          className="w-full h-auto mt-5"
        />
      </div>

      {/* Cart Section */}
      <div className="flex flex-col lg:flex-row lg:h-[525px] items-center lg:justify-around gap-8 px-4">
        {/* Cart Items List */}
        <div className="flex flex-col w-full lg:w-auto">
          {/* Cart Header */}
          <nav className="h-[55px] w-full lg:w-[817px] bg-[#F9F1E7] flex items-center justify-around text-center text-sm lg:text-base font-semibold rounded-lg">
            <li className="w-1/5">Product</li>
            <li className="w-1/5">Price</li>
            <li className="w-1/5">Quantity</li>
            <li className="w-1/5">Subtotal</li>
            <li className="w-1/5">Action</li>
          </nav>

          {/* Cart Items */}
          <div className="mt-6 lg:mt-8 flex flex-col gap-6">
            {cartItems.length > 0 ? (
              cartItems.map((item: any) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 justify-between bg-white shadow-md p-4 rounded-lg"
                >
                  {/* Product Image */}
                  <div className="w-1/5">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={72}
                      height={72}
                      className="rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <span className="w-1/5 text-sm lg:text-base">{item.title}</span>
                  <span className="w-1/5 text-sm lg:text-base">${item.price}</span>

                  {/* Quantity */}
                  <div className="w-1/5 flex justify-center">
                    <span className="h-[32px] w-[32px] rounded-md border border-gray-400 flex items-center justify-center text-sm">
                      {item.quantity}
                    </span>
                  </div>

                  {/* Subtotal */}
                  <span className="w-1/5 text-sm lg:text-base">
                    ${item.price * item.quantity}
                  </span>

                  {/* Remove Button */}
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="w-1/5 flex justify-center"
                  >
                    <Image
                      src="/images/bin.png"
                      alt="delete"
                      width={20}
                      height={20}
                      className="cursor-pointer hover:scale-110"
                    />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center mt-8 text-gray-500">Your cart is empty!</p>
            )}
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="bg-[#F9F1E7] w-full lg:w-[393px] p-6 rounded-lg shadow-md">
          <h1 className="text-center text-[24px] lg:text-[32px] font-semibold mb-6">
            Cart Totals
          </h1>
          <div className="flex justify-between mb-4">
            <h3 className="text-sm lg:text-base">Subtotal</h3>
            <span className="text-sm lg:text-base">${totalPrice}</span>
          </div>
          <div className="flex justify-between mb-6">
            <h3 className="text-sm lg:text-base">Total</h3>
            <span className="text-sm lg:text-base text-[#B88E2F]">
              ${totalPrice}
            </span>
          </div>
          <Link href="/CheckoutPage">
            <button className="w-full lg:w-[222px] h-[48px] lg:h-[58px] rounded-2xl text-[18px] lg:text-[20px] bg-black text-white hover:bg-[#B88E2F] hover:text-black transition-all">
              Check Out
            </button>
          </Link>
        </div>
      </div>

      {/* Feature Section */}
      <Feature />
    </>
  );
};

export default Cart;






