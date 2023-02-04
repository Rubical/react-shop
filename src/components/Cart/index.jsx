import CartOrder from "../CartOrder/CartOrder";
import CartStatus from "../CartStatus/CartStatus";
import CartTotal from "../CartTotal/CartTotal";
import CartItem from "../CartItem";
import "./style.scss";

const Cart = ({ cart }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Ваш заказ</h5>
        <div data-cart-empty className="alert alert-secondary" role="alert">
          Корзина пуста
        </div>
        <div className="cart-wrapper">
          {cart.map((cartItem) => {
            return <CartItem cartItem={cartItem} key={cartItem.id} />;
          })}
        </div>
        <div className="cart-total">
          <CartStatus />
          <CartTotal />
        </div>
      </div>
      <CartOrder />
    </div>
  );
};

export default Cart;
