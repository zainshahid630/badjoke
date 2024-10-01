import "./footer.css";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Paxium from '../../assets/Paxium.png';

import twitter from '../../assets/twitter.png';
import discord from '../../assets/dics.png';
import telegram from '../../assets/teleg.png';
import instagram from '../../assets/insta.png';

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Logo Section */}
      <div className="footer-logo">
        <img src={Paxium} alt="Paxium Logo" />
      </div>

      {/* Links Section */}
      <div className="footer-links">
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/projects" className="footer-link">Key Projects</Link>
        <Link to="/whitepaper" className="footer-link">WhitePaper</Link>
        <Link to="/tokenomics" className="footer-link">Tokenomics</Link>
        <Link to="/faqs" className="footer-link">FAQs</Link>
        <Link to="/faqs" className="footer-link"> Terms & Conditions</Link>
        <Link to="/faqs" className="footer-link"> Privacy Policy</Link>
        


       
      </div>

      {/* Social Media Section */}
      <p className="footer-follow">Follow Us</p>
      <div className="footer-social-icons">
        <img src={twitter} alt="Twitter" className="footer-icon" />
        <img src={discord} alt="Discord" className="footer-icon" />
        <img src={telegram} alt="Telegram" className="footer-icon" />
        <img src={instagram} alt="Instagram" className="footer-icon" />
      </div>
    </div>
  );
};

export default Footer;
