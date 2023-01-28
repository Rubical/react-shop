import "./style.scss";

const Cart = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Ваш заказ</h5>
        <div data-cart-empty className="alert alert-secondary" role="alert">
          Корзина пуста
        </div>
        <div className="cart-wrapper"></div>
        <div className="cart-total">
          <p data-cart-delivery className="none">
            <span className="h5">Доставка:</span>{" "}
            <span className="delivery-cost free">бесплатно</span>{" "}
          </p>
          <p>
            <span className="h5">Итого:</span>{" "}
            <span className="total-price">0</span>{" "}
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
