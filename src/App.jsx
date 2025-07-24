import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext'; // Adjust path as needed
import Navbar from './components/Nav'; // Adjust path as needed
import Home from './pages/Home'; // Adjust path as needed
import ProductGrid from './pages/Product'; // Adjust path as needed
import Cart from './pages/Cart';
import About from './pages/About'; // If you have it
import Login from './pages/Login'; // If you have it
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductGrid />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;