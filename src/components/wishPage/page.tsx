'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Heart } from 'lucide-react';
import { removeFromWishlist } from '@/app/(addtocart)/redux/Features/wishlistSlice';

// Define the type for wishlist items
interface WishlistItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

export default function Wishlist() {
  const dispatch = useDispatch();

  // Access wishlist items from the Redux store
  const wishlistItems: WishlistItem[] = useSelector(
    (state: any) => state.wishlist.items || []
  );

  // Remove item from wishlist
  const handleRemoveFromWishlist = (id: string) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="p-2">
          <Heart className="w-[28px] h-[28px] cursor-pointer" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white text-black">
        <SheetHeader>
          <SheetTitle>Wishlist</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          {wishlistItems.length > 0 ? (
            <div className="flex flex-col gap-4">
              {wishlistItems.map((item, index) => (
                <div
                  key={item.id || index} // Use id as key, fallback to index if id is missing
                  className="flex items-center justify-between border-b pb-4"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="lg:w-[100px] lg:h-[100px] object-cover"
                  />
                  <div>
                    <h3 className="text-[10px] md:text-[16px] font-poppins">
                      {item.title}
                    </h3>
                    <p className="text-[10px] md:text-[16px] text-[#B88E2F]">
                      <span className="text-black">1 X </span>Rs. {item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="text-red-500"
                  >
                    <Image
                      src="/images/cross.png"
                      alt="Remove Item"
                      width={20}
                      height={20}
                      className=""
                    />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">Your wishlist is empty!</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
