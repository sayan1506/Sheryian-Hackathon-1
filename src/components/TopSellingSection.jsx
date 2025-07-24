import React from 'react';
import './TopSellingSection.css';

const TopSellingSection = () => {
  const topSellingItems = [
    {
    id: 1,
    name: "Kulhad Chai",
    price: 20,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    category: "chai",
    description: "Classic desi masala chai served in a hot kulhad."
  },
  {
    id: 2,
    name: "Masala Chai",
    price: 25,
    image: "https://spicestationsilverlake.com/wp-content/uploads/2023/03/An-Introduction-to-Masala-Chai-Indias-Spiced-Tea.jpg",
    category: "chai",
    description: "Strong tea infused with traditional spices."
  },
    {
    id: 3,
    name: "Filter Coffee",
    price: 35,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    category: "coffee",
    description: "South Indian filter coffee brewed to perfection."
  },
    {
    id: 4,
    name: "Mint Mojito",
    price: 40,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    category: "drinks",
    description: "Chilled soda with mint and lime freshness."
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
