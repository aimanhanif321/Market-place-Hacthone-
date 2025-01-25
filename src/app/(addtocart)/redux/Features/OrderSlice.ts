
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { CartItem } from './CartSlice'

// export interface BillingDetails {
//   firstName: string;
//   lastName: string;
//   companyName?: string;
//   country?: string;
//   address: string;
//   city: string;
//   province: string;
//   zip: string;
//   phone: string;
//   email: string;
//   additionalInfo?: string;
//   cartItems: CartItem[];
// }

// export interface Order {
//   billingDetails: BillingDetails;
//   CartItems: CartItem[];
//   orderDetails: OrderDetails;
//   orderPlaced: boolean;
// }

// interface OrderDetails {
//   orderId: string;
//   status: string;
//   // Add any other fields related to order details
// }

// export const initialState = {
//   billingDetails: {} as BillingDetails,
//   CartItems: [] as CartItem[],
//   orderDetails: {} as OrderDetails,
//   orderPlaced: false, // Track whether the order has been placed or not
// };

// const orderSlice = createSlice({
//   name: 'order',
//   initialState,
//   reducers: {
//     setBillingDetails: (state, action: PayloadAction<BillingDetails>) => {
//       state.billingDetails = action.payload;
//     },
//     clearOrder: (state) => {
//       state.billingDetails = {} as BillingDetails;
//       state.CartItems = [];
//       state.orderDetails = {} as OrderDetails;
//       state.orderPlaced = false;  // Reset orderPlaced flag when clearing order
//     },
//     setOrderDetails: (state, action: PayloadAction<OrderDetails>) => {
//       state.orderDetails = action.payload;
//     },
//     setOrderPlaced: (state, action: PayloadAction<boolean>) => {
//       state.orderPlaced = action.payload; // Set orderPlaced flag
//     },
//   },
// });

// export const { setBillingDetails, clearOrder, setOrderDetails, setOrderPlaced } = orderSlice.actions;
// export default orderSlice.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./CartSlice"; // CartItem ko correctly import karo

// Billing details ka interface
export interface BillingDetails {
  firstName: string;
  lastName: string;
  companyName?: string;
  country?: string;
  address: string;
  city: string;
  province: string;
  zip: string;
  phone: string;
  email: string;
  additionalInfo?: string;
}

// Order details ka interface
export interface OrderDetails {
  orderId: string;
  status: string; // Pending, Confirmed, Delivered, etc.
}

// Pura Order ka interface
export interface Order {
  _id?: string; // Add _id as optional
  billingDetails: BillingDetails; // Customer ka billing info
  CartItems: CartItem[]; // Cart items Redux state se
  orderDetails: OrderDetails; // Order ke status aur ID
  orderPlaced: boolean; // Track whether the order is placed
}

// Initial Redux state
export const initialState: Order = {
  billingDetails: {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    province: "",
    zip: "",
    phone: "",
    email: "",
  },
  CartItems: [], // Initially cart khali hoga
  orderDetails: {
    orderId: "",
    status: "Pending", // Default status
  },
  orderPlaced: false, // Default state
};

// Redux slice
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    // Billing details ko set karne ke liye
    setBillingDetails: (state, action: PayloadAction<BillingDetails>) => {
      state.billingDetails = action.payload;
    },
    // Cart items ko set karne ke liye
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.CartItems = action.payload;
    },
    // Order details ko set karne ke liye
    setOrderDetails: (state, action: PayloadAction<OrderDetails>) => {
      state.orderDetails = action.payload;
    },
    // Order placed flag ko update karne ke liye
    setOrderPlaced: (state, action: PayloadAction<boolean>) => {
      state.orderPlaced = action.payload;
    },
    // Saara order data clear karne ke liye
    clearOrder: (state) => {
      state.billingDetails = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        province: "",
        zip: "",
        phone: "",
        email: "",
      };
      state.CartItems = [];
      state.orderDetails = {
        orderId: "",
        status: "Pending",
      };
      state.orderPlaced = false;
    },
  },
});

// Actions ko export karo
export const {
  setBillingDetails,
  setCartItems,
  setOrderDetails,
  setOrderPlaced,
  clearOrder,
} = orderSlice.actions;

// Reducer ko export karo
export default orderSlice.reducer;

