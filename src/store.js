import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import currencyReducer from "./utilis/currencySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    currency: currencyReducer,
  },
});
