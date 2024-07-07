import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h2>Welcome to Maison Bellucci</h2>
        <p>Craft your bespoke fragrance, a signature scent tailored exclusively for you</p>
        <a href="#customize-section"><button className="header-button">Discover Your Essence</button> </a>
      </div>
    </header>
  );
};

export default Header;
