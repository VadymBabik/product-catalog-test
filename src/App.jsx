import React, { useEffect } from "react";
import constants from "./services/constants";
import Cookies from "js-cookie";
import { setUserToken } from "./store/user/slice";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList/ProductList";
import ProductItem from "./components/ProductItem/ProductItem";
import { setAuthorizationToken } from "./services";
import { useDispatch, useSelector } from "react-redux";
import { getLoadingState } from "./store/loading/slice";
import Preloader from "./components/Base/Preloader";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const jwtToken = Cookies.get(constants.jwtToken);
  const dispatch = useDispatch();
  const { loading } = useSelector(getLoadingState);
  useEffect(() => {
    if (jwtToken) {
      setAuthorizationToken(jwtToken);
      dispatch(setUserToken(jwtToken));
    }
  }, [jwtToken, dispatch]);
  return (
    <Layout>
      {loading && <Preloader />}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="product/:productId" element={<ProductItem />} />
        <Route path="*" element={<ProductList />} />
      </Routes>
    </Layout>
  );
};
export default App;
