import Product from "../Product";
import data from "../../data";
import Cart from "../Cart";
import { useState } from "react";

const Row = () => {
  const [product, setProduct] = useState(data);
  const [cartItem, setCartItem] = useState("");

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

  const increaseCartItemCount = (id) => {
    setCartItem((cartItem) => {
      return cartItem.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            count: ++cartItem.count,
          };
        }
        return cartItem;
      });
    });
  };

  const decreaseCartItemCount = (id) => {
    setCartItem((cartItem) => {
      return cartItem.map((cartItem) => {
        if (cartItem.id === id) {
          const newCount = cartItem.count - 1 > 1 ? --cartItem.count : 1;
          return {
            ...cartItem,
            count: newCount,
          };
        }
        return cartItem;
      });
    });
  };

  const addCartItem = (item) => {
    // if (
    //   cartItem &&
    //   cartItem.find(
    //     (item) =>
    //       item.id === targetEl.querySelector("[data-counter]").textContent
    //   )
    // ) {
    //   setCartItem(...cartItem, {
    //     count: "5",
    //   });
    //   console.log(
    //     parseInt(targetEl.querySelector("[data-counter]").textContent)
    //   );
    // } else {
    setCartItem([
      ...cartItem,
      {
        id: product[0].id,
        imgSrc: product[0].imgSrc,
        name: product[0].title,
        amount: product.itemsInBox,
        weight: product.weight,
        count: product.count,
        price: product.price,
      },
    ]);
    // }
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
        <Cart
          increaseCartItemCount={increaseCartItemCount}
          decreaseCartItemCount={decreaseCartItemCount}
          product={product}
          cartItem={cartItem}
          increase={increase}
          decrease={decrease}
        />
      </div>
    </div>
  );
};

export default Row;
