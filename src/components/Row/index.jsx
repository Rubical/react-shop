import Cart from "../Cart";
import Product from "../Product";
import products from "./../../data";

const Row = () => {
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="row" id="products-container">
          {products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
      <div className="col-md-4">
        <Cart />
      </div>
    </div>
  );
};
export default Row;
