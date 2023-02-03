import { useRef, useState } from "react";
import Count from "../Count";
import ToCartBtn from "../ToCartBtn";
import "./style.scss";

const Product = () => {
  return (
    <div className="col-md-6">
      <div className="card mb-4" data-id>
        <img className="product-img" src="#!" alt="" />
        <div className="card-body text-center">
          <h4 className="item-title"></h4>
          <p>
            <small data-items-in-box className="text-muted">
              шт.
            </small>
          </p>

          <div className="details-wrapper">
            <Count />
            <div className="price">
              <div className="price__weight"> г.</div>
              <div className="price__currency"> ₽</div>
            </div>
          </div>
          <ToCartBtn />
        </div>
      </div>
    </div>
  );
};

export default Product;
