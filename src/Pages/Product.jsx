import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { productList } from '../data/Products'; // Adjust path as needed
import './ProductGrid.css';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Get unique categories from products
  const categories = ['all', ...new Set(productList.map(product => product.category))];
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? productList 
    : productList.filter(product => product.category === selectedCategory);

  return (
    <div className="product-grid-container">
      <div className="grid-header">
        <h1 className="grid-title">Chai Sutta Adda Menu</h1>
        <p className="grid-subtitle">Discover our authentic flavors and handpicked selections</p>
        
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
          />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;