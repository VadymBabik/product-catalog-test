import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, { payload }) {
      state.product = payload;
    },
  },
});
export default productReducer.reducer;
export const getProductState = (state) => state.product;
export const { setProducts } = productReducer.actions;
