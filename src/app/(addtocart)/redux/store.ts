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


// src/redux/store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './Features/CartSlice'; // Cart slice import
// import wishlistReducer from './Features/wishlistSlice'; // Wishlist slice import
// import orderReducer from './Features/OrderSlice'; // Order slice import

// // Define the RootState interface for type safety
// import { CartItem } from './Features/CartSlice'; // Import the CartItem type
// import { Order } from './Features/OrderSlice';   // Import the Order type

// export interface RootState {
//   cart: {
//     items: CartItem[]; // Array of items in the cart
//     totalAmount: number; // Total value of the cart
//   };
//   wishlist: {
//     items: CartItem[]; // Array of items in the wishlist
//   };
//   order: Order; // Order details, including billing, cart items, and status
// }

// // Create the Redux store and configure the reducers for each slice
// export const store = configureStore({
//   reducer: {
//     cart: cartReducer, // Cart items and total amount reducer
//     wishlist: wishlistReducer, // Wishlist items reducer
//     order: orderReducer, // Order details reducer (billing, cart items, etc.)
//   },
// });

// // RootState defines the structure of the entire Redux state
// export type RootState = ReturnType<typeof store.getState>;

// // AppDispatch is the type for dispatching actions
// export type AppDispatch = typeof store.dispatch;
