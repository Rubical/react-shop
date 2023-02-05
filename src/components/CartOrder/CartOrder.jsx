import "./style.scss";

const CartOrder = () => {
  return (
    <div id="order-form" className="card-body border-top ">
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
  );
};

export default CartOrder;
