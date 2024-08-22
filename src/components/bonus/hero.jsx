import React from "react";
import bgimage from '../../assets/hero-bg.png'
import bjImage from '../../assets/Logotoken.png';
import "./bonus.css";

const Fundingbonus = () => {
  return (
    <div className="funding-hero">
      <h2 class="title">Bonus Calculator</h2>
      <div className="funding-hero-container">

        <div className="funding-hero-text">
          <h1 className="funding-hero-title">Ready to Buy</h1>
          <p className="funding-hero-subtitle">
            All you need to buy Doge2014 tokens at the
            lowest presale price is a decentralised wallet
            containing ETH, USDT, or Card. Simply connect to
            the widget above to swap tokens!
          </p>
          <div className="hero-btn-wrapper">
            <button className="whitepaper-btn">Buy Now</button>

          </div>
        </div>
        <div className="funding-hero-image"  >
          <div className="card-container" style={{ backgroundColor: '#F9FEEA', color: 'black' }}>
            <div className="next-price-text">
              <p style={{ fontSize: '30px' }}>Bonus Calculator</p>
            </div>
            <p >
              Input the amount of USDT you’re purchasing to see your
              bonus

            </p>
            <div style={{display:'flex',justifyContent:'space-between' }}  className="mt-4">
            <p style={{}}> If I Buy </p>
            <div  style={{display:'flex'}}>   
                     
            (
            <img  style={{width:'20px' , marginBottom:'10px'}} src={bjImage} />  
               <span > 100 </span>
            ) Bonus BJ
              </div>
              </div>
              <input  className="form-input"/>
             

          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundingbonus;
