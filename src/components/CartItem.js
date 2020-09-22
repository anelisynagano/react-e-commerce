import React from 'react';

const CartItem = ({ product }) => {
    return (
        <div className="row">
            <div className="col">{product.product_title}</div>
            <div className="col">{product.product_price}</div>
            <div className="col">{product.quantity}</div>
        </div>
    )
}

export default CartItem;