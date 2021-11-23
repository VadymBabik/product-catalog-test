import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  reviews: null,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, { payload }) {
      state.product = payload;
    },
    getReviews(state, { payload }) {
      state.reviews = payload;
    },
  },
});
export default productReducer.reducer;
export const getProductState = (state) => state.product;
export const { setProducts, getReviews } = productReducer.actions;
