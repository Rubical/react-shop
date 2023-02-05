import CartOrder from "../CartOrder/CartOrder";
import CartStatus from "../CartStatus/CartStatus";
import CartTotal from "../CartTotal/CartTotal";
import CartItem from "../CartItem";
import "./style.scss";

const showCart = ({
  cart,
  increaseCartCount,
  decreaseCartCount,
  deleteCartItem,
}) => {
  const cartItems = cart.map((cartItem) => {
    return (
      <>
        <CartItem
          cartItem={cartItem}
          key={cartItem.id}
          increaseCartCount={increaseCartCount}
          decreaseCartCount={decreaseCartCount}
          deleteCartItem={deleteCartItem}
        />
      </>
    );
  });
  return (
    <>
      {cartItems}
      <CartStatus />
      <CartTotal cart={cart} />
      <CartOrder />
    </>
  );
};

const showNothing = () => {
  return (
    <div data-cart-empty className="alert alert-secondary" role="alert">
      Корзина пуста
    </div>
  );
};

const Cart = ({
  cart,
  increaseCartCount,
  decreaseCartCount,
  deleteCartItem,
}) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Ваш заказ</h5>

        <div className="cart-wrapper">
          {cart.length > 0
            ? showCart({
                cart,
                increaseCartCount,
                decreaseCartCount,
                deleteCartItem,
              })
            : showNothing()}
        </div>
        <div className="cart-total"></div>
      </div>
    </div>
  );
};

export default Cart;
