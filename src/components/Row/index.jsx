
import Product from "./Product";
import data from "../../data";
import Cart from "./Cart";
import { useState } from "react";

const Row = () => {
    const [product, setProduct] = useState(data)

    const products = product.map((product) => {
        return (<Product product={product} key={product.id} />)
    })
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
    )
}

export default Row;