import React, { useState } from 'react';
import CartItem from './CartItem';
import axios from 'axios';
const CartPage = ({ cartItems, setCartItems }) => {
    const [showCart, setShowCart] = useState(false);

    const handleToggleCart = () => {
        setShowCart(!showCart);
    };
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const removeItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    };

    const placeOrder = async () => {
        if (formData.firstName && formData.lastName && formData.address && cartItems) {
            const response = await axios.post('http://localhost:4000/api/place-order', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                address: formData.address,
                cartItems: cartItems,
            });
            console.log('Order placed:', response.data);
            setCartItems([]);
            setFormData({
                firstName: '',
                lastName: '',
                address: '',
            });
            setShowCart(false)
        }
        else {
            alert("properly fill up all details")
        }
    };
    return (
        <div className="cart">
            <button onClick={handleToggleCart} style={{ "padding": "2vh" }}>{showCart ? 'hide' : 'show'} Cart</button>
            <h2>Order Details</h2>
            {showCart && (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <CartItem item={item} />
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
            <p>Total: ${getTotalPrice().toFixed(2)}</p>
            {showCart && (
                <>
                    <h2>* Please fill up this Form to Place Order</h2>
                    <form onSubmit={placeOrder}>
                        <div>
                            <label>
                                First Name:
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Last Name:
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Address:
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </label>
                        </div>
                    </form>
                    <button onClick={placeOrder} style={{ "padding": "2vh", "marginTop": "2vh" }}>Place Order</button>
                </>)}
        </div>
    );
};

export default CartPage;
