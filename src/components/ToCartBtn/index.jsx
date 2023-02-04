import "./style.scss";

const ToCartBtn = ({ addCartItem, product }) => {
  return (
    <button
      data-cart
      type="button"
      className="btn btn-block btn-outline-warning"
      onClick={() => {
        addCartItem(product);
      }}
    >
      + в корзину
    </button>
  );
};
export default ToCartBtn;
