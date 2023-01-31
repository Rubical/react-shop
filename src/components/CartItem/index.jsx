import "./style.scss";

const CartItem = ({
  cartItem,
  increaseCartItemCount,
  decreaseCartItemCount,
}) => {
  return (
    <div className="cart-item" data-id={cartItem.id}>
      <div className="cart-item__top">
        <div className="cart-item__img">
          <img src={cartItem.imgSrc} alt={cartItem.name} />
        </div>
        <div className="cart-item__desc">
          <div className="cart-item__title">{cartItem.name}</div>
          <div className="cart-item__weight">
            {cartItem.amount} / {cartItem.weight}
          </div>
          <div className="cart-item__details">
            <div className="items items--small counter-wrapper">
              <div
                className="items__control"
                data-action="minus"
                onClick={() => {
                  decreaseCartItemCount(cartItem.id);
                }}
              >
                -
              </div>
              <div className="items__current" data-counter="">
                {cartItem.count}
              </div>
              <div
                className="items__control"
                data-action="plus"
                onClick={() => {
                  increaseCartItemCount(cartItem.id);
                }}
              >
                +
              </div>
            </div>
            <div className="price">
              <div className="price__currency">{cartItem.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
