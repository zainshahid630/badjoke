import React from "react";
import token from '../../assets/tokeno0.png'
import bgimage1 from '../../assets/tokenlist.png'


import "./token.css";

const FundingToken = () => {
  return (
    <div className="funding-hero"  style={{background:'rgb(37 37 37)'}}>
      <h2 class="title">Pexium  <span style={{color:"#00FFFF"}}> Tokenomics </span> </h2>
      <div className="">
      <img src={token} alt="token" className="token-img" style={{width:'50%' , display:"block" , marginLeft:"auto" , marginRight:"auto"}} />
      </div>

    </div>
  );
};

export default FundingToken;
