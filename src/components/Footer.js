import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.6064676812366!2d10.330594327905168!3d43.55388985334302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5ebfc5d6a13a9%3A0xb3ceda8a84fb2216!2sVia%20dei%20Condotti%20Vecchi%2C%2057121%20Livorno%20LI%2C%20Italy!5e0!3m2!1sen!2sca!4v1720203342777!5m2!1sen!2sca"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Phone Number: +39 0586 111111</p>
          <p>Email: maisonbellucci@info.ca</p>
          <p>Hours: Monday-Saturday | 9am-5pm</p>
        </div>
      </div>
      <p>&copy; 2024 Maison Bellucci. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
