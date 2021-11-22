import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./user/slice";
import loading from "./loading/slice";
import product from "./product/slice";
const rootReducer = combineReducers({
  user,
  loading,
  product,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
