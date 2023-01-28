import "./style.scss";

const ToCartBtn = ({ addCartItem }) => {
  return (
    <button
      onClick={addCartItem}
      data-cart
      type="button"
      className="btn btn-block btn-outline-warning"
    >
      + в корзину
    </button>
  );
};
export default ToCartBtn;
