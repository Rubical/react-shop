import { useState } from "react";
import "./style.scss";

const CartItem = ({
  cartItem,
  increaseCartCount,
  decreaseCartCount,
  deleteCartItem,
}) => {
  const { title, itemsInBox, weight, price, imgSrc, count, id } = cartItem;

  return (
    <div className="cart-item" data-id>
      <div className="cart-item__top">
        <div className="cart-item__img">
          <img src={`./img/roll/${imgSrc}`} alt={title} />
        </div>
        <div className="cart-item__desc">
          <div className="cart-item__title">{title}</div>
          <div className="cart-item__weight">
            {itemsInBox} шт. / {weight} г.
          </div>
          <div className="cart-item__details">
            <div className="items items--small counter-wrapper">
              <div
                className="items__control"
                data-action="minus"
                onClick={() => {
                  decreaseCartCount(id);
                  deleteCartItem(cartItem);
                }}
              >
                -
              </div>
              <div className="items__current" data-counter="">
                {count}
              </div>
              <div
                className="items__control"
                data-action="plus"
                onClick={() => increaseCartCount(id)}
              >
                +
              </div>
            </div>
            <div className="price">
              <div className="price__currency">{price} ₽</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
