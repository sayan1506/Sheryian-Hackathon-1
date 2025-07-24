import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, getItemQuantity, isInCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      addToCart(product);
      await new Promise(resolve => setTimeout(resolve, 300));
    } catch (err) {
      console.error(err);
    } finally {
      setIsAdding(false);
    }
  };

  const itemQuantity = getItemQuantity(product.id);
  const itemInCart = isInCart(product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">₹{product.price}</span>
          <button
            className={`add-to-cart-btn ${isAdding ? 'adding' : ''} ${itemInCart ? 'in-cart' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? (
              <>
                <span className="btn-spinner"></span> Adding...
              </>
            ) : itemInCart ? (
              <>
                ✓ Add More
              </>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
