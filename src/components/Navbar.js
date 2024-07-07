import React from 'react';
import './Navbar.css';

const Navbar = ({ onCartClick }) => {
  return (
    <nav>
      <div className="logo">
        <a href=""><img src="/Logo.png" alt="Logo" /> </a>
      </div>
      <ul className="nav-links">
        <li><a href="#men-fragrances">Men</a></li>
        <li><a href="#women-fragrances">Women</a></li>
        <li><a href="#customize-section">Customize</a></li>
        <li><a href="#our-story">Our Story</a></li>
      </ul>
      <div className="shopping-cart" onClick={onCartClick}>
        <a href="#checkout-section"> <img src="/shop.png" alt="Shopping Cart"/> </a>
      </div>
    </nav>
  );
};

export default Navbar;
