import { useState } from "react";
import Count from "../Count";
import ToCartBtn from "../ToCartBtn";
import "./style.scss";

const Product = ({ product, increase, decrease, addCartItem, toCartBtn }) => {
  const { id, imgSrc, title, itemsInBox, weight, price } = product;
  return (
    <div className="col-md-6">
      <div className="card mb-4" data-id={id}>
        <img className="product-img" src={`./img/roll/${imgSrc}`} alt="" />
        <div className="card-body text-center">
          <h4 className="item-title">{title}</h4>
          <p>
            <small data-items-in-box className="text-muted">
              {itemsInBox} шт.
            </small>
          </p>

          <div className="details-wrapper">
            <Count increase={increase} decrease={decrease} product={product} />
            <div className="price">
              <div className="price__weight">{weight} г.</div>
              <div className="price__currency">{price} ₽</div>
            </div>
          </div>
          <ToCartBtn toCartBtn={toCartBtn} addCartItem={addCartItem} />
        </div>
      </div>
    </div>
  );
};

export default Product;
