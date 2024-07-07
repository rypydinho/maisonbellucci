import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CarouselSection from './components/CarouselSection';
import MenFragrances from './components/MenFragrances';
import WomenFragrances from './components/WomenFragrances';
import Customize from './components/Customize';
import OurStory from './components/OurStory';
import CommunicateWithPerfumist from './components/CommunicateWithPerfumist';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import FilterComponent from './components/FilterComponent';
import './App.css';

const App = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({});
  const [currentSection, setCurrentSection] = useState('');

  const handleAddToBag = (product) => {
    setCart([...cart, product]);
    setShowCheckout(true);
  };

  const handleCartClick = () => {
    setShowCheckout(true);
  };

  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.substring(1)), 0);

  return (
    <div className="App">
      <Navbar onCartClick={handleCartClick} />
      <Header />
      <main>
        <CarouselSection />
        <div className="separator"></div>
        <FilterComponent filters={filters} setFilters={setFilters} currentSection={currentSection} />
        
        <div id="men-fragrances" onClick={() => setCurrentSection('MenFragrances')}>
          <MenFragrances filters={filters} onAddToBag={handleAddToBag} />
        </div>
        <div className="separator"></div>
        <div id="women-fragrances" onClick={() => setCurrentSection('WomenFragrances')}>
          <WomenFragrances filters={filters} onAddToBag={handleAddToBag} />
        </div>
        <div className="separator"></div>
        <Customize onAddToBag={handleAddToBag} />
        <div className="separator"></div>
        <OurStory />
        <div className="separator"></div>
        <CommunicateWithPerfumist />
        {showCheckout && <Checkout cart={cart} totalPrice={`$${totalPrice.toFixed(2)}`} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
