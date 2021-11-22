import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, { payload }) {
      state.user = payload;
    },
    clearUserData(state) {
      state.user = initialState.user;
    },
  },
});

export default userReducer.reducer;
export const getUserState = (state) => state.user;
export const { setUserData, clearUserData } = userReducer.actions;
