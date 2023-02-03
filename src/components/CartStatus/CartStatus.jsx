const CartStatus = () => {
  return (
    <p data-cart-delivery className="none">
      <span className="h5">Доставка:</span>
      <span className="delivery-cost free">бесплатно</span>
    </p>
  );
};

export default CartStatus;
