"use client"
import { Heart, Menu, Search, ShoppingCart,} from 'lucide-react';
import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useSelector } from 'react-redux';
import Wishlist from '../wishPage/page';
import LanguageSwitcher from '../Language/page';



const Navbar = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const cartItemCount = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);

  return (
    <nav className="bg-white text-black ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            width={500}
            height={30}
            src="/images/logoo.png"
            alt="Logo"
            className="w-[100px] h-[30px] md:w-[185px] md:h-[42px]"
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-12">
          <Link href="/" className="hover:text-gray-400 text-[16px] font-poppins">
            Home
          </Link>
          <Link href="/Shop" className="hover:text-gray-400 text-[16px]">
            Shop
          </Link>
          <Link href="/Blog" className="hover:text-gray-400 text-[16px]">
            Blog
          </Link>
          <Link href="/ContactPage" className="hover:text-gray-400 text-[16px]">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-6">
          <Image height={10} width={10} src="/images/usericon.png" alt="User" className="w-[23px] h-[18px]" />
          <Search className="w-[28px] h-[28px] cursor-pointer hover:text-gray-400 text-[16px]" />
         



          <Link href="/Cart">
          <div className="relative">
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </div>
        </Link>


          {/* <Heart className="w-[28px] h-[28px] cursor-pointer hover:text-gray-400 text-[16px]" /> */}
          <Link href="#">
            <Heart className="w-[28px] h-[28px] cursor-pointer hover:text-gray-400 text-[16px]" />
          </Link>
        </div>


          <Wishlist/>
        </div> 


        {/* Hamburger Menu (Mobile View) */}
        <Sheet >
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white text-black">
            <SheetHeader>
              <SheetTitle>
                <div className="flex justify-center">
                  <img
                    src="/images/logoo.png"
                    alt="Logo"
                    className="w-[185px] h-[42px]"
                  />
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-center gap-6 mt-6">
            <Link href="/" className="hover:text-gray-400 text-[16px] font-poppins">
            Home
          </Link>
          <Link href="/Shop" className="hover:text-gray-400 text-[16px]">
            Shop
          </Link>
          <Link href="/Blog" className="hover:text-gray-400 text-[16px]">
            Blog
          </Link>
          <Link href="/ContactPage" className="hover:text-gray-400 text-[16px]">
            Contact
          </Link>
            </div>
          </SheetContent>
        </Sheet>
      
    </nav>
                 

  );
};



export default Navbar;