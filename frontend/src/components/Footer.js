import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-section">
            <h5>ReahBites</h5>
            <p>Your ultimate destination for movie and restaurant reviews.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">📘</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">🐦</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">📷</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className="col-md-4 footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/browse/movies">Movies</Link></li>
              <li><Link to="/browse/restaurants">Restaurants</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          
          <div className="col-md-4 footer-section">
            <h5>Contact</h5>
            <p>📧 info@reahbites.com</p>
            <p>📱 +1 (555) 123-4567</p>
            <p>📍 123 Review Street, Food City</p>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="footer-bottom">
          <p>&copy; 2024 ReahBites. All rights reserved.</p>
          <p className="footer-credits">
            Made with ❤️ for food and movie lovers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

