import { useState } from "react";
import Cart from "../Cart";
import Product from "../Product";
import products from "./../../data";

const Row = () => {
  const [cart, setCart] = useState([]);
  const [productItem, setProductItem] = useState(products);

  const addCartItem = (item) => {
    let isInArray = false;
    cart.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
        setCart(
          cart.map((el) => {
            if (isInArray === true) {
              return { ...el, count: el.count + item.count };
            }
            return el;
          })
        );
      }
    });
    if (!isInArray) {
      setCart([...cart, item]);
    }
  };

  const decreaseCount = (id) => {
    setProductItem((productItem) => {
      return productItem.map((item) => {
        if (item.id === id) {
          const newCount = item.count - 1 > 1 ? item.count - 1 : 1;
          return {
            ...item,
            count: newCount,
          };
        }
        return item;
      });
    });
  };

  const increaseCount = (id) => {
    setProductItem((productItem) => {
      return productItem.map((item) => {
        if (item.id === id) {
          const newCount = item.count + 1;
          return {
            ...item,
            count: newCount,
          };
        }
        return item;
      });
    });
  };

  const decreaseCartCount = (id) => {
    setCart((cart) => {
      return cart.map((item) => {
        if (item.id === id) {
          const newCount = item.count - 1 > 1 ? item.count - 1 : 1;
          return {
            ...item,
            count: newCount,
          };
        }

        return item;
      });
    });
  };

  const increaseCartCount = (id) => {
    setCart((cart) => {
      return cart.map((item) => {
        if (item.id === id) {
          const newCount = item.count + 1;
          return {
            ...item,
            count: newCount,
          };
        }
        return item;
      });
    });
  };

  const deleteCartItem = (id) => {
    setCart((cart) => {
      return cart.forEach((el) => {
        return el.filter(el.count !== 1);
      });
    });
  };

  return (
    <div className="row">
      <div className="col-md-8">
        <div className="row" id="products-container">
          {productItem.map((product) => {
            return (
              <Product
                product={product}
                key={product.id}
                addCartItem={addCartItem}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
              />
            );
          })}
        </div>
      </div>
      <div className="col-md-4">
        <Cart
          cart={cart}
          increaseCartCount={increaseCartCount}
          decreaseCartCount={decreaseCartCount}
          deleteCartItem={deleteCartItem}
        />
      </div>
    </div>
  );
};
export default Row;
