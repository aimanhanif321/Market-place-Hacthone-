
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export interface CartItem {
//   id: string; 
//   title: string; 
//   price: number; 
//   quantity: number; 
//   imageUrl: string; 
// }

// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       // Check karte hain ke product pehle se cart mein hai ya nahi
//       const existingItem = state.items.find(item => item.id === action.payload.id);

//       if (existingItem) {
//         // Agar product pehle se hai, to sirf quantity barhayein
//         existingItem.quantity += action.payload.quantity;
//       } else {
//         // Agar product nahi hai, to naya product cart mein add karein
//         state.items.push(action.payload);
//       }
//     },
//     removeFromCart: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;









// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item exists, increase the quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // Otherwise, add the new item to the cart
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      // Filter out the item to remove
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      // Clear all items from the cart
      state.items = [];
    },
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      // Set the entire cart items
      state.items = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
