import "./style.scss"

const ToCartBtn = ({addToCart, product}) => {
    return (
        <button onClick={() => addToCart(product.id)} data-cart type="button" className="btn btn-block btn-outline-warning">+ в корзину</button>
    )
}

export default ToCartBtn;