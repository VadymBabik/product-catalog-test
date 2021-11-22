import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadingReducer = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state, { payload }) {
      state.loginState = payload;
    },
  },
});
export default loadingReducer.reducer;
export const getLoadingState = (state) => state.loading;
export const { setLoading } = loadingReducer.actions;
