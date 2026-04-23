import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import currencyReducer from "./utilis/currencySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,

    currency: currencyReducer,
  },
});
