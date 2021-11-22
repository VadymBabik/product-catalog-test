import React from "react";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList/ProductList";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Layout>
  );
};
export default App;
