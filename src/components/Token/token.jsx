import React from "react";
import bgimage from '../../assets/token1.png'
import bgimage1 from '../../assets/tokenlist.png'


import "./token.css";

const FundingToken = () => {
  return (
    <div className="funding-hero">
      <h2 class="title">Tokenomics </h2>
      <div className="funding-hero-container">
        
        <div className="funding-hero-text">
               <img src={bgimage} />
        </div>
        <div className="funding-hero-image " style={{marginBottom:'150px'}}  >
        <img src={bgimage1} />
        </div>
      </div>
    </div>
  );
};

export default FundingToken;
