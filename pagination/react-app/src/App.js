import React, { useState } from 'react';
import ProductListingPage from './components/ProductListingPage';
import CartPage from './components/CartPage';
import "./App.css"

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = cartItems.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="app">
      <CartPage cartItems={cartItems} setCartItems={setCartItems} />
      <ProductListingPage addToCart={addToCart} />
    </div>
  );
};

export default App;
