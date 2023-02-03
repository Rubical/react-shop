import Cart from "../Cart";
import Product from "../Product";
const Row = () => {
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="row" id="products-container">
          <Product />
        </div>
      </div>
      <div className="col-md-4">
        <Cart />
      </div>
    </div>
  );
};

export default Row;
