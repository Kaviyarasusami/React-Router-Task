import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Navbar from './Navbar';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';

const Appmain = () => {
// Cart state that will be passed to different components
const [cart, setCart] = useState([]);

// Add product to cart
const addToCart = (product) => {
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    alert('Item already added to the cart');
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

// Remove product from cart
const removeFromCart = (productId) => {
  const updatedCart = cart.filter((item) => item.id !== productId);
  setCart(updatedCart);
};

// Update quantity of product in cart
const updateQuantity = (productId, quantity) => {
  const updatedCart = cart.map((item) =>
    item.id === productId ? { ...item, quantity } : item
  );
  setCart(updatedCart);
};


    return (
        <Router>
      <div className="App">
        <Navbar cartCount={cart.length} />
        
        <Routes>
          <Route
            path="/"
            
            element={<HomePage addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
               
              <CartPage 
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              />
            
            }
          />
        </Routes>
      </div>
    </Router>
    );
};

export default Appmain;