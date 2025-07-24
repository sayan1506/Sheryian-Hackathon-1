import React from 'react';
import './BranchesSection.css';

const BranchesSection = () => {
  const branches = [
    {
      id: 1,
      city: "Mumbai",
      locality: "Bandra West, Near Station",
      address: "Hill Road, Bandra West",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 2,
      city: "Delhi",
      locality: "Connaught Place",
      address: "Block A, CP, New Delhi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 3,
      city: "Kolkata",
      locality: "Park Street Area",
      address: "Near Metro Station",
      image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 5,
      city: "Bhopal",
      locality: "MP Nagar Zone 1",
      address: "Near DB City Mall",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 6,
      city: "Jaipur",
      locality: "MI Road",
      address: "Near Panch Batti Circle",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 7,
      city: "Bangalore",
      locality: "Indiranagar",
      address: "100 Feet Road",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 8,
      city: "Chennai",
      locality: "T. Nagar",
      address: "Pondy Bazaar Street",
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 9,
      city: "Lucknow",
      locality: "Hazratganj",
      address: "Near GPO, Hazratganj",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format"
    }
  ];

  const handleBranchClick = (branch) => {
    console.log(`Clicked on ${branch.city} branch`);
  };

  return (
    <section className="branches-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">📍 Our Branches</h2>
          <p className="section-subtitle">
            Serving kulhad chai across the nation with love.
          </p>
        </div>
        
        <div className="branches-grid">
          {branches.map((branch) => (
            <div 
              key={branch.id} 
              className="branch-card"
              onClick={() => handleBranchClick(branch)}
            >
              <div className="branch-image-wrapper">
                <img 
                  src={branch.image} 
                  alt={`${branch.city} branch`}
                  className="branch-image"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="location-pin">📍</div>
                </div>
              </div>
              
              <div className="branch-info">
                <h3 className="branch-city">{branch.city}</h3>
                <p className="branch-locality">{branch.locality}</p>
                <p className="branch-address">{branch.address}</p>
                
                <div className="branch-actions">
                  <button className="visit-btn">
                    <span>Visit Store</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="directions-btn">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-footer">
          <p className="expansion-text">
            More locations coming soon! Stay tuned for updates.
          </p>
          <button className="franchise-btn">
            Interested in Franchise? 
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
