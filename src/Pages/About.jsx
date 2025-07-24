import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">About Chai Sutta Adda</h1>
          <p className="hero-subtitle">
            A digital tribute to the chai revolution that started with two friends and a dream
          </p>
          <div className="kulhad-icon">☕</div>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-content">
        
        {/* The Story Section */}
        <section className="story-section">
          <div className="section-header">
            <h2 className="section-title">The Chai Revolution That Started It All</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="story-content">
            <div className="story-text">
              <p>
                In the bustling streets of Indore, two college friends had a simple dream that would 
                eventually brew into one of India's most beloved chai stories. <strong>Anubhav Dubey</strong> and 
                <strong> Anand Nayak</strong>, armed with nothing but passion and a meager budget of ₹4 lakhs, 
                embarked on a journey that would redefine how India experiences its favorite beverage.
              </p>
              
              <p>
                What started as <strong>Chai Sutta Bar</strong> in 2016 wasn't just another tea stall – it was 
                a revolution in a kulhad. These two visionaries saw something beautiful in the chaos of 
                student life, in the late-night conversations over steaming cups of chai, and in the 
                simple joy of sharing stories with strangers who quickly became friends.
              </p>
            </div>
            
            <div className="story-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🏪</span>
                <p>The Beginning</p>
              </div>
            </div>
          </div>
        </section>

        {/* Movement Section */}
        <section className="movement-section">
          <div className="section-header">
            <h2 className="section-title">More Than Just Tea - A Movement</h2>
            <div className="title-underline"></div>
          </div>
          
          <p className="movement-intro">
            The genius of Chai Sutta Bar lay not just in serving exceptional tea, but in their 
            commitment to <strong>sustainability and community</strong>. By choosing to serve their aromatic 
            blends in traditional <strong>kulhads</strong> (earthen cups), they weren't just being eco-friendly – 
            they were creating livelihoods for local potters, preserving ancient crafts, and giving 
            every sip a story.
          </p>

          <div className="kulhad-benefits">
            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>Environmental Responsibility</h3>
              <p>Biodegradable, zero plastic waste</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🏺</div>
              <h3>Cultural Heritage</h3>
              <p>Keeping traditional pottery alive</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Community Support</h3>
              <p>Direct employment for artisan potters</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">✨</div>
              <h3>Authentic Experience</h3>
              <p>The earthy aroma that only clay can provide</p>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="journey-section">
          <div className="section-header">
            <h2 className="section-title">From Indore Streets to National Hearts</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="journey-content">
            <p>
              What began as a single outlet in Indore has grown into a phenomenon that resonates 
              with the young, ambitious, and chai-loving spirit of India. Chai Sutta Bar became 
              more than a franchise – it became a <strong>cultural hub</strong> where students gathered to 
              fuel their dreams, professionals unwound after long days, and friends created 
              memories one kulhad at a time.
            </p>
            
            <p>
              The brand's journey from a local favorite to a national sensation is a testament 
              to the power of authentic experiences. By staying true to their roots while embracing 
              growth, Anubhav and Anand proved that success isn't just about scaling up – it's 
              about scaling with purpose.
            </p>
            
            <div className="inspiration-quote">
              <blockquote>
                "Their story became an inspiration for countless young entrepreneurs, showing that 
                with the right blend of passion, authenticity, and community spirit, even the 
                humblest chai stall can become a national movement."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Why Chai Sutta Adda Section */}
        <section className="why-section">
          <div className="section-header">
            <h2 className="section-title">Why Chai Sutta Adda?</h2>
            <div className="title-underline special"></div>
          </div>
          
          <div className="why-intro">
            <p>
              <strong>Chai Sutta Adda</strong> is our heartfelt tribute to this incredible journey and 
              the vision that started it all. While we deeply respect and admire the original 
              Chai Sutta Bar and its founders, this digital experience represents something 
              unique – a reimagining of how traditional chai culture can meet modern technology.
            </p>
          </div>

          {/* Digital Homage */}
          <div className="homage-section">
            <h3 className="subsection-title">A Digital Homage to Authentic Roots</h3>
            <p>This website celebrates the spirit of the original idea while exploring new possibilities:</p>
            
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <div className="feature-content">
                  <h4>Modern UI/UX meets Desi Soul</h4>
                  <p>We've crafted every pixel to reflect the warmth of a kulhad and the energy of an adda</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <div className="feature-content">
                  <h4>Storytelling through Technology</h4>
                  <p>Each interaction tells the story of chai culture, community, and street-side conversations</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🏛️</div>
                <div className="feature-content">
                  <h4>Preserving Cultural Essence</h4>
                  <p>From terracotta-inspired colors to traditional typography, every design choice honors heritage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solo Project */}
          <div className="solo-section">
            <h3 className="subsection-title">A Solo Developer's Passion Project</h3>
            <p>Built with love for a frontend hackathon, <strong>Chai Sutta Adda</strong> represents more than just code:</p>
            
            <div className="passion-points">
              <div className="passion-item">
                <span className="passion-icon">💡</span>
                <span><strong>Innovation within tradition</strong> - Modern web experiences with cultural soul</span>
              </div>
              
              <div className="passion-item">
                <span className="passion-icon">👨‍💻</span>
                <span><strong>Solo craftsmanship</strong> - Individual passion creating meaningful digital experiences</span>
              </div>
              
              <div className="passion-item">
                <span className="passion-icon">🎭</span>
                <span><strong>Design storytelling</strong> - Every component thoughtfully crafted to evoke warmth</span>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="future-section">
            <h3 className="subsection-title">The Future of Chai Culture</h3>
            <p>
              While this remains a tribute project, <strong>Chai Sutta Adda</strong> envisions a world where 
              technology enhances rather than replaces authentic experiences. It's about creating 
              digital spaces that feel as warm and welcoming as the original chai stalls that inspired them.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="disclaimer-section">
          <div className="disclaimer-content">
            <p>
              <strong>Disclaimer:</strong> Chai Sutta Adda is an independent tribute project and is not 
              affiliated with or endorsed by Chai Sutta Bar or its founders. This project is created 
              purely out of admiration for their inspiring journey and as a showcase of frontend 
              development skills.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;