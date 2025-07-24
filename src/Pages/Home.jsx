import "./Home.css"
import { useNavigate } from "react-router-dom";
import CircularGallery from '../components/CircularGallery'
import BranchesSection from '../components/BranchesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TopSellingSection from '../components/TopSellingSection'
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer'; // Add this
// import HeroStats from '../components/HeroStats' // We'll create this
// import FeaturesSection from '../components/FeaturesSection' // We'll create this

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  }

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              Welcome to <br />
              <span className="brand-highlight">Chai Sutta Adda</span>
            </h1>
            <p className="hero-description">
              A place where kulhad chai meets <br />
              endless conversations.
            </p>

            {/* Add hero stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Chai Varieties</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5★</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>

            <div className="hero-buttons">
              <button className="hero-btn primary" onClick={handleClick}>
                Explore Products
              </button>
              <button className="hero-btn secondary" onClick={() => navigate("/about")}>
                Our Story
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="gallery-container">
              <CircularGallery
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
              />
            </div>

            {/* Add floating elements */}
            <div className="floating-elements">
              <div className="floating-chai">☕</div>
              <div className="floating-leaf">🍃</div>
              <div className="floating-steam">💨</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse"></div>
          <span>Scroll to explore</span>
        </div>
      </div>

      {/* Add the TopSellingSection */}
      <TopSellingSection />

      <BranchesSection />

      {/* Add Testimonials/Reviews */}
      <TestimonialsSection />


      <SubscribeSection />

      <Footer />
      {/* Add Features Section */}
      {/* <FeaturesSection /> */}


      {/* Add Newsletter Signup */}
      {/* <NewsletterSection /> */}
    </>
  )
}

export default Home
