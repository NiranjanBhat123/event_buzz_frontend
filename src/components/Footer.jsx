import React from 'react';
import '../css/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Event Buzz</h2>
        <div className="footer-info">
          <div className="info-item">
            <FaEnvelope />
            <span>eventbuzz@gmail.com</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>NIE Mysuru</span>
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
