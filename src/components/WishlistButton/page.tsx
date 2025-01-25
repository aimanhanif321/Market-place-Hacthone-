'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../app/(addtocart)/redux/Features/wishlistSlice';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
interface WishlistButtonProps {
  product: 
  { _id: string; title: string; price: number; imageUrl: string };
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ product }) => {
  const dispatch = useDispatch();

  // Use selector to access wishlist items from Redux store
  const wishlistItems = useSelector((state: any) => state.wishlist.items || []);

  // Track the local wishlist state for the current product
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Sync local state with Redux state
  useEffect(() => {
    setIsInWishlist(wishlistItems.some((item: any) => item._id === product._id));
  }, [wishlistItems, product._id]);

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      dispatch(addToWishlist(product));
    }
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(product._id));
  };

  return (
    <button
      onClick={isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist}
      className="flex items-center gap-2 text-lg font-semibold hover:bg-red-600"
    >
      {isInWishlist ? (
        <IoHeart size={24} color="red" />
      ) : (
        <IoHeartOutline size={24} />
      )}
      {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  );
};

export default WishlistButton;

