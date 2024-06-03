/*import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.subTotal = existingItem.quantity * existingItem.priceAfterDiscount;
      } else {
        state.items.push({ ...action.payload, quantity: 1, subTotal: action.payload.priceAfterDiscount });
      }
      state.totalQuantity += 1;
      state.totalAmount += action.payload.priceAfterDiscount;
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity -= 1;
        existingItem.subTotal = existingItem.quantity * existingItem.priceAfterDiscount;
        state.totalQuantity -= 1;
        state.totalAmount -= action.payload.priceAfterDiscount;
      }
      if (existingItem.quantity === 0) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
*/

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0, // Ensure this is a number
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      const priceAfterDiscount = parseFloat(action.payload.priceAfterDiscount); // Ensure this is a number

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.subTotal = (existingItem.quantity * priceAfterDiscount).toFixed(2);
      } else {
        state.items.push({ ...action.payload, quantity: 1, subTotal: priceAfterDiscount.toFixed(2) });
      }
      state.totalQuantity += 1;
      state.totalAmount += priceAfterDiscount; // Ensure this is a numeric operation
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      const priceAfterDiscount = parseFloat(action.payload.priceAfterDiscount); // Ensure this is a number

      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity -= 1;
        existingItem.subTotal = (existingItem.quantity * priceAfterDiscount).toFixed(2);
        state.totalQuantity -= 1;
        state.totalAmount -= priceAfterDiscount; // Ensure this is a numeric operation
      }
      if (existingItem.quantity === 0) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
