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
    sendReviews: (data, id) => axios.post(`/api/reviews/${id}`, data),
    getReviews: (id) => axios.get(`/api/reviews/${id}`),
  },
};

export default api;
