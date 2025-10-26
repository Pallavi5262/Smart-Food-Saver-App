import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        {/* Column 1: Branding & About */}
        <div className="footer-column">
          <h3 className="footer-title">Smart Food Saver</h3>
          <p className="footer-desc">
            Reducing food waste by connecting generous donors with orphanages in need.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><NavLink to="/" className="footer-link">Home</NavLink></li>
            <li><NavLink to="/donate" className="footer-link">Donate</NavLink></li>
            <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
            <li><NavLink to="/about" className="footer-link">About</NavLink></li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="footer-column">
          <h4 className="footer-subtitle">Contact Us</h4>
          <p className="footer-contact"><strong>Email:</strong> <a href="mailto:support@smartfoodsaver.com">support@smartfoodsaver.com</a></p>
          <p className="footer-contact"><strong>Phone:</strong> <a href="tel:+1234567890">+91 234 567 890</a></p>
          <p className="footer-contact"><strong>Address:</strong> Hyderabad, Telangana, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Smart Food Saver. All rights reserved.
      </div>
    </footer>
  );
}
