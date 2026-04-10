import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API = "https://api.frankfurter.dev/v2/rate/USD/PKR";

export const fetchRate = createAsyncThunk("currency/fetchRate", async () => {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Failed to convert currency");
  const data = await res.json();
  console.log("from APIIIIIIIIIIIIII");
  //fulfilled payload
  return data.rate;
});

const initialState = {
  ratePKR: 1,
  status: "idle",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRate.fulfilled, (state, action) => {
        state.ratePKR = action.payload;
        state.status = "success";
      });
  },
});

export default currencySlice.reducer;

export const convertToPKR = (amount) => (state) => {
  return Math.floor(amount * state.currency.ratePKR);
};
