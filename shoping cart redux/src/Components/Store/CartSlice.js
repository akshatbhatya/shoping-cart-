import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

console.log(initialState.cart.length);

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
