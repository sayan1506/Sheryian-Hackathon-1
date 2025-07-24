import React from 'react';
import './TopSellingSection.css';

const TopSellingSection = () => {
  const topSellingItems = [
    {
      id: 1,
      name: "Masala Chai",
      price: 25,
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop&auto=format",
      description: "Traditional spiced tea blend"
    },
    {
      id: 2,
      name: "Adrak Chai",
      price: 30,
      image: "https://images.unsplash.com/photo-1597318181409-cf64d0b3d814?w=400&h=300&fit=crop&auto=format",
      description: "Refreshing ginger-infused chai"
    },
    {
      id: 3,
      name: "Elaichi Chai",
      price: 35,
      image: "https://images.unsplash.com/photo-1594631661960-206c2fccfc70?w=400&h=300&fit=crop&auto=format",
      description: "Aromatic cardamom delight"
    },
    {
      id: 4,
      name: "Kulhad Chai",
      price: 40,
      image: "https://images.unsplash.com/photo-1566313458259-1d19e7ee2e1a?w=400&h=300&fit=crop&auto=format",
      description: "Authentic clay cup experience"
    }
  ];

  const handleAddToCart = (item) => {
    // Add your cart logic here
    console.log(`Added ${item.name} to cart`);
  };

  return (
    <section className="top-selling-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">☕ Customer Favorites</h2>
          <p className="section-subtitle">
            Handpicked flavors our customers love the most.
          </p>
        </div>
        
        <div className="products-container">
          <div className="products-scroll">
            {topSellingItems.map((item) => (
              <div key={item.id} className="product-card">
                <div className="product-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="product-image"
                    loading="lazy"
                  />
                  <div className="image-overlay"></div>
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-description">{item.description}</p>
                  
                  <div className="product-footer">
                    <span className="product-price">₹{item.price}</span>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellingSection;
