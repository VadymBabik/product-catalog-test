import api from "../../../src/services/api";
import { setUserData } from "./slice";
import Cookies from "js-cookie";
import { setLoading } from "../loading/slice";
import { setAuthorizationToken } from "../../services";
import constants from "../../services/constants";
export const registerUsers = (dataUser) => {
  return async (dispatch) => {
    try {
      Cookies.remove(constants.jwtToken);
      dispatch(setLoading(true));
      const { data, status } = await api.users.registerUser(dataUser);
      if (status >= 200 && status < 300) {
        dispatch(setUserData(data));
        if (data?.token) {
          setAuthorizationToken(data?.token);
          Cookies.set(constants.jwtToken, data?.token);
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
      Cookies.remove(constants.jwtToken);
      dispatch(setLoading(true));
      const { data, status } = await api.users.loginUser(dataUser);
      if (status >= 200 && status < 300) {
        dispatch(setUserData(data));
        if (data?.token) {
          setAuthorizationToken(data?.token);
          Cookies.set(constants.jwtToken, data?.token);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
