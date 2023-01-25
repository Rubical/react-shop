import Product from "../Product";
import data from "../../data";
import Cart from "../Cart";
import CartItem from "../CartItem";
import { useState } from "react";

const Row = () => {
  const [product, setProduct] = useState(data);

  const increase = (id) => {
    setProduct((product) => {
      return product.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setProduct((product) => {
      return product.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? --product.count : 1;
          return {
            ...product,
            count: newCount,
          };
        }
        return product;
      });
    });
  };

  const addToCart = ((id) => {
    if (id===product.id) {
      return <CartItem/>
    }
  } )

  const products = product.map((product) => {
    return (
      <Product
        product={product}
        key={product.id}
        increase={increase}
        decrease={decrease}
        addToCart={addToCart}
      />
    );
  });
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="row" id="products-container">
          {products}
        </div>
      </div>
      <div className="col-md-4">
        <Cart />
      </div>
    </div>
  );
};

export default Row;
