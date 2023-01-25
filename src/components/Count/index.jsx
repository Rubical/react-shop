import "./style.scss";

const Count = ({ product, increase, decrease }) => {
  return (
    <div className="items counter-wrapper">
      <div
        className="items__control"
        data-action="minus"
        onClick={() => decrease(product.id)}
      >
        -
      </div>
      <div className="items__current" data-counter>
        {product.count}
      </div>
      <div
        className="items__control"
        data-action="plus"
        onClick={() => increase(product.id)}
      >
        +
      </div>
    </div>
  );
};

export default Count;
