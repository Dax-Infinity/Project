import React from 'react';

const CartItem = ({ item }) => {
    const { name, price, quantity } = item;

    return (
        <div className="cart-item">
            <p>{name}</p>
            <span style={{ "marginLeft": "14vh" }}>price:-</span><p>${price}</p>
            <span style={{ "marginLeft": "14vh" }}>Quantity:-</span><input type="number" value={quantity} readOnly style={{ "marginLeft": "4vh", "width": "5vh" }} />
        </div>
    );
};

export default CartItem;
