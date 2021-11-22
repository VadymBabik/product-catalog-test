import axios from "axios";
import constants from "./constants";
axios.defaults.baseURL = constants.API_URL;

const api = {
  users: {
    registerUser: (data) => axios.post(`/api/register/`, data),
    loginUser: (data) => axios.post(`/api/login/`, data),
  },
  product: {
    getProducts: () => axios.get(`/api/products/`),
  },
};

export default api;
