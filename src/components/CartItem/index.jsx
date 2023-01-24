const CartItem = () => {
    return (
        <div class="cart-item" data-id="${productInfo.id}">
		    <div class="cart-item__top">
			    <div class="cart-item__img">
				    <img src="${productInfo.imgSrc}" alt="${productInfo.name} " />
			    </div>
			    <div class="cart-item__desc">
				    <div class="cart-item__title">${productInfo.name}</div>
				    <div class="cart-item__weight">${productInfo.amount}/ ${productInfo.weight}</div>
				    <div class="cart-item__details">
					    <div class="items items--small counter-wrapper">
						    <div class="items__control" data-action="minus">-</div>
						    <div class="items__current" data-counter="">${productInfo.counter}</div>
						    <div class="items__control" data-action="plus">+</div>
					    </div>
					    <div class="price">
						    <div class="price__currency">${productInfo.price}<div>
					    </div>
				    </div>
			    </div>
		    </div>
	    </div>
    )
}

export default CartItem;