const CartTotal = ({ cart }) => {
  let totalPrice = 0;
  cart.forEach((el) => {
    return (totalPrice += el.count * el.price);
  });
  return (
    <p>
      <span className="h5">Итого:</span>
      <span className="total-price">{totalPrice}</span>
      <span className="rouble">₽</span>
    </p>
  );
};

export default CartTotal;
