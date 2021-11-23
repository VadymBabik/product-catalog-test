import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";

const ProductCart = ({ cart }) => {
  const { id, title, img } = cart;
  const navigate = useNavigate();

  return (
    <div
      className="col s12 m6 l4 xl3 "
      onClick={() => navigate(`product/${id}`)}
    >
      <div className="card hoverable">
        <div className="card-image">
          <img
            src={
              img === "img1.png"
                ? img1
                : img === "img2.png"
                ? img2
                : "https://picsum.photos/600/600"
            }
            alt="product"
          />
          <span
            style={{ color: "#424242", fontWeight: "bold" }}
            className="card-title"
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
