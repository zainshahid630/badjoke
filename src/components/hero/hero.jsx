import React from "react";
import bgimage from '../../assets/hero-bg.png'


import "./hero.css";

const FundingHero = () => {
  return (
    <div className="funding-hero"  style={{ backgroundImage: `url(${bgimage})` , backgroundRepeat:'round' , backgroundColor:'#1E3229' }} >
      <div className="funding-hero-container">
        <div className="funding-hero-text">
          <h1 className="funding-hero-title">Introducing BadJoke</h1>
          <p className="funding-hero-subtitle">
            The only cryptocurrrency you will HODL till the next bear run
          </p>
          <div className="hero-btn-wrapper">
            <button className="whitepaper-btn">WHITEPAPER</button>
            <button className="audit-btn">AUDIT</button>
          </div>
        </div>
        <div className="funding-hero-image"  >
          <div className="card-container" style={{backgroundColor:'#F9FEEA' , color:'black'}}>
            <div className="next-price-text">
              <h6>NEXT PRICE INCREASE IN</h6>
            </div>
            <div className="time-card">
              <div className="time-duration">
                <span>09</span>
                <span>Days</span>
              </div> 
              
              <div className="time-duration">
                <span>04</span>
                <span>Hours</span>
              </div>
              <div className="time-duration">
                <span>08</span>
                <span>Minutes</span>
              </div>
              <div className="time-duration">
                <span>47</span>
                <span>Seconds</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column ",
                gap: "2px",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <span>USDT RAISED: $160,010.56 / $1,438,978 </span>
              <span>Your purchased Doge2014 = 0 </span>

              <span>Your purchased Doge2014 = 0 </span>
            </div>

            <h2 class="hr-lines">1 Doge2014 = $0.000294</h2>
            <div className="currency-btn">
              <button className="eth-btn">ETH</button>
              <button className="btc-btn">BTC</button>
            </div>
            <div style={{marginTop:"8px" , textAlign : "center"}}>
            <span >Pay with ETH Max 0 Receive Badjoke2014</span>

            </div>
            <div className="wallet-btn">
              <button> CONNECT WALLET</button>
            </div>
            <div style={{marginTop:"10px" , textAlign:"center" , color:"black" , fontWeight:"700"}}>
             <span>Powered by Web3Payments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingHero;
