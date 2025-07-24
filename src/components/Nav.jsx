import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="brand">Chai Sutta Adda</h1>
        <p className="tagline">🫖 Authentic Flavors</p>
      </div>

      {/* Mobile menu toggle */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
        <NavLink to="/" activeclassname="active" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/products" activeclassname="active" onClick={closeMenu}>Menu</NavLink>
        <NavLink to="/about" activeclassname="active" onClick={closeMenu}>About</NavLink>
        <NavLink to="/login" activeclassname="active" onClick={closeMenu}>Login</NavLink>
      </div>

      <div className="nav-cart">
        <NavLink to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-text">Cart</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;