import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  //  "pizzaId": 1,
  //   "name": "Margherita",
  //   "quantity": 2,
  //   "unitPrice": 12,
  //   "totalPrice": 24
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    //Payload Object pizza
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    //Pizza ID
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;

      item.totalPrice = item.quantity * item.unitPrice;
      // if (item.quantity === 0) {
      //   state.cart = state.cart.filter(
      //     (item) => item.pizzaId !== action.payload,
      //   );
      // }

      //See here owais, we are using the deleteItem reducer to remove the item from the cart if the quantity is 0, instead of directly filtering it here. This way we can keep our reducers more organized and reusable.
      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getItemQuantity = (pizzaId) => (state) => {
  const item = state.cart.cart.find((item) => item.pizzaId === pizzaId);
  return item ? item.quantity : 0;
};

export default cartSlice.reducer;
