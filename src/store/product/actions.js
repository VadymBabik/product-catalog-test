import { setLoading } from "../loading/slice";
import api from "../../services/api";
import { getReviews, setProducts } from "./slice";

export const getProductList = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data, status } = await api.product.getProducts();
      if (status >= 200 && status < 300) {
        dispatch(setProducts(data));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
export const getReviewsList = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data, status } = await api.product.getReviews(id);
      if (status >= 200 && status < 300) {
        dispatch(getReviews(data));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const sendReview = (dataReview, id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { status } = await api.product.sendReviews(dataReview, id);
      if (status >= 200 && status < 300) {
        dispatch(getReviewsList(id));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
