import axios from "axios";
import api from "../../../src/services/api";
import { setUserData } from "./slice";
import { setLoading } from "../loading/slice";
export const registerUsers = (dataUser) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data, status } = await api.users.registerUser(dataUser);
      if (status >= 200 && status < 300) {
        dispatch(setUserData(data));
        if (data?.token) {
          axios.defaults.headers.common.authorization = `Bearer ${data?.token}`;
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const loginUsers = (dataUser) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data, status } = await api.users.loginUser(dataUser);
      if (status >= 200 && status < 300) {
        dispatch(setUserData(data));
        if (data?.token) {
          axios.defaults.headers.common.authorization = `Bearer ${data?.token}`;
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
