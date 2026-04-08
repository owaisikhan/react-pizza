import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "ammar",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
