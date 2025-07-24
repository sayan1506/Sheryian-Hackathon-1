import React from 'react';
import { useCart } from '../contexts/CartContext'; // Adjust path as needed
import './Cart.css';

const Cart = () => {
  const {
    cartItems,
    cartItemsCount,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    // Implement checkout logic here
    alert(`Proceeding to checkout with ${cartItemsCount} items worth ₹${cartTotal.toFixed(2)}`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <h1 className="cart-title">Your Cart</h1>
        </div>
        
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <button 
            className="continue-shopping-btn"
            onClick={() => window.history.back()}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">Your Cart</h1>
        <div className="cart-summary">
          <span className="items-count">{cartItemsCount} items</span>
          <button 
            className="clear-cart-btn" 
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <span className="item-category">{item.category}</span>
              </div>
              
              <div className="item-price">
                <span className="unit-price">₹{item.price}</span>
              </div>
              
              <div className="quantity-controls">
                <button 
                  className="quantity-btn decrease"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn increase"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              
              <div className="item-subtotal">
                <span className="subtotal-amount">₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
              
              <button 
                className="remove-item-btn"
                onClick={() => handleRemoveItem(item.id)}
                title="Remove item"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="cart-sidebar">
          <div className="order-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Items ({cartItemsCount})</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>₹0.00</span>
            </div>
            
            <div className="summary-row">
              <span>Tax</span>
              <span>₹{(cartTotal * 0.05).toFixed(2)}</span>
            </div>
            
            <hr className="summary-divider" />
            
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{(cartTotal * 1.05).toFixed(2)}</span>
            </div>
            
            <button 
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
            
            <button 
              className="continue-shopping-btn secondary"
              onClick={() => window.history.back()}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;