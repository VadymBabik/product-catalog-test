import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../store/product/actions";
import { getProductState } from "../../store/product/slice";
import ProductCart from "../ProductCart";

const ProductList = () => {
  const { product } = useSelector(getProductState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <>
      <h3>Product list</h3>
      <div className="row">
        {product?.length ? (
          product.map((e) => <ProductCart key={e.id} cart={e} />)
        ) : (
          <div>Product list empty</div>
        )}
      </div>
    </>
  );
};

export default ProductList;
