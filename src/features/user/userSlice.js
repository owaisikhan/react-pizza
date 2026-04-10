import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
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

export const getUsername = (state) => state.user.name;
