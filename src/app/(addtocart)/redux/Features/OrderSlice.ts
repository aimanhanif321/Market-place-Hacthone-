
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



import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from './CartSlice';

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
  cartItems: CartItem[];
}

export interface OrderDetails {
  orderId: string;
  status: string;
  // Add any other fields related to order details
}

export interface Order {
  billingDetails: BillingDetails;
  CartItems: CartItem[];
  orderDetails: OrderDetails;
  orderPlaced: boolean;
}

export const initialState: Order = {
  billingDetails: {} as BillingDetails,
  CartItems: [] as CartItem[],
  orderDetails: {} as OrderDetails,
  orderPlaced: false, // Track whether the order has been placed or not
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setBillingDetails: (state, action: PayloadAction<BillingDetails>) => {
      state.billingDetails = action.payload;
    },
    clearOrder: (state) => {
      state.billingDetails = {} as BillingDetails;
      state.CartItems = [];
      state.orderDetails = {} as OrderDetails;
      state.orderPlaced = false; // Reset orderPlaced flag when clearing order
    },
    setOrderDetails: (state, action: PayloadAction<OrderDetails>) => {
      state.orderDetails = action.payload;
    },
    setOrderPlaced: (state, action: PayloadAction<boolean>) => {
      state.orderPlaced = action.payload; // Set orderPlaced flag
    },
  },
});

export const { setBillingDetails, clearOrder, setOrderDetails, setOrderPlaced } = orderSlice.actions;
export default orderSlice.reducer;
