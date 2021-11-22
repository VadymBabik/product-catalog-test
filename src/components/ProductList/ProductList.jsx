import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../store/product/actions";
import { getProductState } from "../../store/product/slice";

const ProductList = () => {
  const { product } = useSelector(getProductState);
  console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  return (
    <>
      <h3>Product list</h3>
      {product?.length ? (
        product.map((e) => <div key={e.id}>{e.text}</div>)
      ) : (
        <div>Product list empty</div>
      )}
    </>
  );
};

export default ProductList;
