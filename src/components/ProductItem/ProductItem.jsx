import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductState } from "../../store/product/slice";
import { getProductList } from "../../store/product/actions";
import Reviews from "../Reviews";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";

const ProductItem = () => {
  const { product } = useSelector(getProductState);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  const productData = product?.find((e) => e.id === +params?.productId);

  return (
    <>
      <h2>{productData?.title}</h2>
      <div className="row">
        <div className="col l6 s12">
          <div className="card">
            <div className="card-image">
              <img
                src={
                  productData?.img === "img1.png"
                    ? img1
                    : productData?.img === "img2.png"
                    ? img2
                    : "https://picsum.photos/600/600"
                }
                alt="product"
              />
            </div>
            <div className="card-content">
              <p>{productData?.text}</p>
            </div>
          </div>
        </div>
        <div className="col l6 s12">
          <Reviews id={+productData?.id} />
        </div>
      </div>
    </>
  );
};

export default React.memo(ProductItem);
