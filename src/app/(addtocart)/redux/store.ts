// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Features/CartSlice';
import wishlistReducer from './Features/wishlistSlice';
import orderReducer from './Features/OrderSlice'; // Import the new order slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer, // Add the order reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
