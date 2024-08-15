import "./footer.css";
import React from "react";
import { FaDiscord, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa6";
import badjoke from '../../assets/Badjoke.png'

const Footer = () => {
  return (
    <>
      <footer>
        <a
        
          className="footer-box first-box"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={badjoke}
            alt="Logo"
           
            style={{ marginTop: "40px"  , height: "50px" }}
          />
        </a>

        <div className="footer-box second-box">
          <a
            className="footer-links"
          >
            Home
          </a>
          <a

            className="footer-links"
          >
            Docs
          </a>
          
          <a
            target="_blank"
            rel="noreferrer"
            className="footer-links"
          >
            Whitepaper
          </a>
        </div>
        <div className="footer-box second-box">
          <a
            className="footer-links"
            target="_blank"
            rel="noreferrer"
          >
            Features
          </a>
          <a
            className="footer-links"
            target="_blank"
            rel="noreferrer"
          >
            Tokenomics
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="footer-links"
          >
            Roadmap
          </a>
        </div>
        <div className="footer-box second-box">
          <a
            className="footer-links"
            target="_blank"
            rel="noreferrer"
          >
            Cookie policy
          </a>
          <a
            className="footer-links"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
         
          <a
            className="footer-links"
          >
            Contact
          </a>
        </div>

        <div
          className="footer-box last-box"
          style={{ paddingTop: "55px" }}
        >
          <div className="footer-box-images">
            <a
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter
                size={23}
                fill="#fff"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram
                size={23}
                fill="#fff"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord
                size={23}
                fill="#fff"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={23}
                fill="#fff"
              />
            </a>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
