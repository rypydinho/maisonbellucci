import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselSection.css';

const CarouselSection = () => {
  const [bgColor, setBgColor] = useState('#FFFFFF'); // Default background color

  const handleSlideChange = (index) => {
    switch (index) {
    case 0:
        setBgColor('#15173F'); 
        break;
      case 1:
        setBgColor('#2D2E67'); // Cinnamon
        break;
      case 2:
        setBgColor('#544D7D'); // Pine Green
        break;
      case 3:
        setBgColor('#6C4571'); 
        break;
      default:
        setBgColor('#FFFFFF'); // Default background color
    }
  };

  return (
    <section className="carousel-section" style={{ backgroundColor: bgColor }}>
      <h2>Fragrance Fusion</h2>
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} onChange={handleSlideChange}>
        <div>
          <img src="/tropical.jpeg" alt="Image 1" />
        </div>
        <div>
          <img src="/blue.jpeg" alt="Image 2" />
        </div>
        <div>
          <img src="/purp.jpeg" alt="Image 3" />
        </div>
        <div>
          <img src="/purple.jpeg" alt="Image 4" />
        </div>
        
      </Carousel>
    </section>
  );
};

export default CarouselSection;





        