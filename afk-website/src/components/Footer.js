import React from 'react';
import './Footer.css'; // Optional: Add styles for the footer

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} AFK Spot. All rights reserved.</p>
      <p>
        <a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a> | 
        <a href="/terms-of-service" style={{ color: '#fff', textDecoration: 'none', marginLeft: '0.5rem' }}>Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;

