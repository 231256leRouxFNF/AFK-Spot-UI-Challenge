import React from 'react';
import './Footer.css'; // Optional: Add styles for the footer

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#FFFFF', color: '#000', padding: '1rem', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} AFK Spot. All rights reserved.</p>
      <p>
        <a href="/privacy-policy" style={{ color: '#000', textDecoration: 'none' }}>Privacy Policy</a> | 
        <a href="/terms-of-service" style={{ color: '#000', textDecoration: 'none', marginLeft: '0.5rem' }}>Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
