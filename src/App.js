import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AboutPage from './components/AboutPage';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout'; 
import OrdersPage from './components/OrdersPage';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
  };
  const addToOrders = (order) => {
    setOrders([...orders, order]);
  };
  const handleCancelOrder = (orderId) => {
    // Logic to cancel the order
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
        <h1>Fashion Designing System</h1>
          <nav className="app-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/products"
              element={<Products addToCart={addToCart} handleBuyNow={handleBuyNow} />}
            />
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
            />
            <Route
            path="/checkout"
            element={<Checkout addToOrders={addToOrders} />}
            />

            <Route
              path="/orders"
              element={<OrdersPage orders={orders} onCancelOrder={handleCancelOrder} />}
            />
          </Routes>
        </main>

        <footer className="app-footer"></footer>
      </div>
    </Router>
  );
}

export default App;
