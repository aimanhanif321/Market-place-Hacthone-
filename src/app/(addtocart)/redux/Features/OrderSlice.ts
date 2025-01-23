
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../types';  // Assuming CartItem type is imported correctly

interface BillingDetails {
  firstName: string;
  lastName: string;
  companyName?: string;
  country: string;
  address: string;
  city: string;
  province: string;
  zip: string;
  phone: string;
  email: string;
  additionalInfo?: string;
  cartItems: CartItem[];
}

interface OrderDetails {
  orderId: string;
  status: string;
  // Add any other fields related to order details
}

export const initialState = {
  billingDetails: {} as BillingDetails,
  cartItems: [] as CartItem[],
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
      state.cartItems = [];
      state.orderDetails = {} as OrderDetails;
      state.orderPlaced = false;  // Reset orderPlaced flag when clearing order
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
