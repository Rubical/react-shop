import "./style.scss";
import CartItem from "./../CartItem/index";
import { useEffect, useState } from "react";

const Cart = ({
  product,
  cartItem,
  decreaseCartItemCount,
  increaseCartItemCount,
}) => {
  if (cartItem) {
    console.log(cartItem);
    var cartItems = cartItem.map((cartItem) => {
      return (
        <CartItem
          cartItem={cartItem}
          key={cartItem.id}
          decreaseCartItemCount={decreaseCartItemCount}
          increaseCartItemCount={increaseCartItemCount}
        />
      );
    });
  }

  const cartEmptyBadge = document.querySelector("[data-cart-empty]");
  const orderForm = document.querySelector("#order-form");

  useEffect(() => {
    if (cartItem) {
      cartEmptyBadge.classList.add("none");
      orderForm.classList.remove("none");
    }
  }, [cartItem]);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Ваш заказ</h5>
        <div data-cart-empty className="alert alert-secondary" role="alert">
          Корзина пуста
        </div>
        <div className="cart-wrapper">{cartItems}</div>
        <div className="cart-total">
          <p data-cart-delivery className="none">
            <span className="h5">Доставка:</span>
            <span className="delivery-cost free">бесплатно</span>
          </p>
          <p>
            <span className="h5">Итого:</span>
            <span className="total-price">0</span>
            <span className="rouble">₽</span>
          </p>
        </div>
      </div>
      <div id="order-form" className="card-body border-top none">
        <h5 className="card-title">Оформить заказ</h5>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Ваш номер телефона"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Заказать
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
