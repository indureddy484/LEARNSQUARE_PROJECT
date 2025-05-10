import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">

        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li>Moisturizers</li>
            <li>Sunscreens</li>
            <li>Hair Serums</li>
            <li>Baby Lotions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blogs</li>
            <li>How We Rate</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>📸</span>
            <span>📘</span>
            <span>🐦</span>
            <span>💼</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CareCoder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
