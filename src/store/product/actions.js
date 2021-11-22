import { setLoading } from "../loading/slice";
import api from "../../services/api";
import { setProducts } from "./slice";

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
