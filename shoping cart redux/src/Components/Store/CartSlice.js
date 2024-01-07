import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [{}],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const cart = {
        id: action.payload.id,
        image: action.payload.image,
      };

      state.cart.push(cart);
    },

    removeItem: (state, action) => {
      state.cart.filter((product) => product.id !== action.payload.id);
    },
  },
});

export default CartSlice.reducer;

export const { addItem, removeItem } = CartSlice.actions;
