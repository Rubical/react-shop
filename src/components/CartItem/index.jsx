import "./style.scss";

const CartItem = () => {
  return (
    <div className="cart-item" data-id>
      <div className="cart-item__top">
        <div className="cart-item__img">
          <img src alt />
        </div>
        <div className="cart-item__desc">
          <div className="cart-item__title"></div>
          <div className="cart-item__weight"></div>
          <div className="cart-item__details">
            <div className="items items--small counter-wrapper">
              <div className="items__control" data-action="minus">
                -
              </div>
              <div className="items__current" data-counter=""></div>
              <div className="items__control" data-action="plus">
                +
              </div>
            </div>
            <div className="price">
              <div className="price__currency"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
