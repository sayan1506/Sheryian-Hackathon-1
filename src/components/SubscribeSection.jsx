import React, { useState } from 'react';
import './SubscribeSection.css';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Add your newsletter subscription logic here
      console.log('Subscribing email:', email);
      
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTryAgain = () => {
    setIsSubmitted(false);
    setError('');
  };

  if (isSubmitted) {
    return (
      <section className="subscribe-section">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h2 className="success-title">Welcome to Our Chai Club!</h2>
            <p className="success-text">
              Thank you for subscribing! You'll receive the best chai updates, 
              exclusive offers, and heartwarming stories directly in your inbox.
            </p>
            <button className="try-again-btn" onClick={handleTryAgain}>
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">🫖 Join Our Chai Club</h2>
          <p className="section-subtitle">
            Get the latest chai flavors, offers, and stories in your inbox.
          </p>
        </div>
        
        <div className="subscribe-content">
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                className={`email-input ${error ? 'error' : ''}`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className={`subscribe-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
            
            {error && <div className="error-message">{error}</div>}
          </form>
          
          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-icon">📧</span>
              <span>Weekly chai recipes & tips</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🎯</span>
              <span>Exclusive discounts & offers</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📖</span>
              <span>Stories from chai lovers</span>
            </div>
          </div>
          
          <p className="privacy-text">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
