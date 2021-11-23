import axios from "axios";

export const setAuthorizationToken = (token = null) => {
  if (token) {
    axios.defaults.headers.common.authorization = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};

export const getImgPath = (img) =>
  img === "img1.png"
    ? "./img/img1.png"
    : img === "img2.png"
    ? "./img/img2.png"
    : "https://picsum.photos/600/600";
