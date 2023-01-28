import Product from "../Product";
import data from "../../data";
import Cart from "../Cart";
import { useState } from "react";

const Row = () => {
  const [product, setProduct] = useState(data);
  const [cartItem, setCartItem] = useState(null);

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

  const addCartItem = () => {
    window.addEventListener("click", function (event) {
      if (event.target.hasAttribute("data-cart")) {
        const targetEl = event.target.closest(".col-md-6");
        setCartItem({
          id: targetEl.querySelector(".card").getAttribute("data-id"),
          imgSrc: targetEl.querySelector("img").getAttribute("src"),
          name: targetEl.querySelector(".item-title").textContent,
          amount: targetEl.querySelector("[data-items-in-box]").textContent,
          weight: targetEl.querySelector(".price__weight").textContent,
          counter: targetEl.querySelector("[data-counter]").textContent,
          price: targetEl.querySelector(".price__currency").textContent,
        });
        console.log(cartItem);
      }
    });
  };

  const products = product.map((product) => {
    return (
      <Product
        product={product}
        key={product.id}
        increase={increase}
        decrease={decrease}
        addCartItem={addCartItem}
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
        <Cart product={product} cartItem={cartItem} />
      </div>
    </div>
  );
};

export default Row;
