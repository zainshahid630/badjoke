import React from "react";
import token from '../../assets/tokeno.png'
import bgimage1 from '../../assets/tokenlist.png'


import "./token.css";

const FundingToken = () => {
  return (
    <div className="funding-hero"  style={{background:'rgb(37 37 37)'}}>
      <h2 class="title">Pexium  <span style={{color:"#00FFFF"}}> Tokenomics </span> </h2>
      <img src={token} />

 
    </div>
  );
};

export default FundingToken;
