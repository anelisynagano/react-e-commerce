import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartArray, totalPrice, handleClearCart }) => {
    return (
        <>
            <button onClick={handleClearCart}>Clear Cart</button>
            <div className="row">
                <div className="col">Product Name</div>
                <div className="col">Product Price</div>
                <div className="col">Quantity</div>
            </div>

            {cartArray.map(cartItem => <CartItem product={cartItem} />)}
            <div>Cart Total: {totalPrice} EUR</div>
        </>
    )
}

export default Cart;