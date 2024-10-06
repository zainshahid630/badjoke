import "./partners.css";
import mainlogo from '../../assets/mainlogo.png';

const Partners = () => {
  return (
    <div className="partners-container">
      <div className="partners-content">
        <img src={mainlogo} className="partners-logo" alt="Paxium Logo" />
        <div className="partners-text">
           <h1 className="partners-title">ABOUT <span className="highlight">PAXIUM</span></h1>
           <p className="partners-description">
             Paxium is a decentralized, peer-to-peer, and community-driven cryptocurrency that aims to create a sustainable and fair financial system for individuals and businesses. Our mission is to create a global community of supporters and investors, fostering a positive and inclusive financial landscape.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
