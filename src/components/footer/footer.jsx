import "./footer.css";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Paxium from '../../assets/Paxium.png';

import twitter from '../../assets/twitter.png';
import discord from '../../assets/dics.png';
import telegram from '../../assets/teleg.png';
import instagram from '../../assets/insta.png';
import { Telegram_link, twitter_link } from "../../utils/constants";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Logo Section */}
      <div className="footer-logo">
        <img src={Paxium} alt="Paxium Logo" />
      </div>

      {/* Links Section */}
      <div className="footer-links">
        <Link to={void(0)} className="footer-link">About</Link>
        <Link to={void(0)} className="footer-link">Key Projects</Link>
        <Link to={void(0)} className="footer-link">WhitePaper</Link>
        <Link to={void(0)} className="footer-link">Tokenomics</Link>
        <Link to={void(0)} className="footer-link">FAQs</Link>
   
        


       
      </div>

      {/* Social Media Section */}
      <p className="footer-follow">Follow Us</p>
      <div className="footer-social-icons">
     
      <img src={twitter} alt="Telegram" onClick={()=>{

window.open(twitter_link, "_blank")

}} />
      
       
        <img src={telegram} alt="Telegram" onClick={()=>{

window.open(Telegram_link, "_blank")

}} />
 

        
      </div>
    </div>
  );
};

export default Footer;
