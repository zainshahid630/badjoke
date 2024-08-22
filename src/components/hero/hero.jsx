import React, { useState, useEffect } from "react";
import bgimage from '../../assets/hero-bg.png';
import usdtImage from '../../assets/usdt.png'; // Replace with the correct path
import bjImage from '../../assets/Logotoken.png'; // Replace with the correct path
import "./hero.css";
import { FaClipboard } from "react-icons/fa6";

const FundingHero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 9,
    hours: 4,
    minutes: 8,
    seconds: 47,
  });
  const [usdtAmount, setUsdtAmount] = useState("");
  const [bjAmount, setBjAmount] = useState("");
  const bjRate = 0.000294; // 1 BJ = $0.000294
  const remainingBJ = 5000 ;
  const TotalBJ = 100000 ;
  
  const percentage = (remainingBJ / TotalBJ) * 100;
  const formattedPercentage = percentage.toFixed(2);

  useEffect(() => {
    const timer = setInterval(() => {
      const { days, hours, minutes, seconds } = timeLeft;

      if (seconds > 0) {
        setTimeLeft((prevState) => ({
          ...prevState,
          seconds: prevState.seconds - 1,
        }));
      } else if (minutes > 0) {
        setTimeLeft((prevState) => ({
          ...prevState,
          minutes: prevState.minutes - 1,
          seconds: 59,
        }));
      } else if (hours > 0) {
        setTimeLeft((prevState) => ({
          ...prevState,
          hours: prevState.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      } else if (days > 0) {
        setTimeLeft((prevState) => ({
          ...prevState,
          days: prevState.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleUsdtChange = (e) => {
    const value = e.target.value;
    setUsdtAmount(value);
    setBjAmount(value / bjRate);
  };

  return (
    <div
      className="funding-hero"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "round",
        backgroundColor: "#1E3229",
      }}
    >
      <div className="funding-hero-container">
        <div className="funding-hero-text">
          <h1 className="funding-hero-title">Introducing BadJoke</h1>
          <p className="funding-hero-subtitle">
            The only cryptocurrency you will HODL till the next bear run
          </p>
          <div className="hero-btn-wrapper">
            <button className="whitepaper-btn">WHITEPAPER</button>
            <button className="audit-btn">AUDIT</button>
            
          </div>
          <div className="AddressContainor">
     
          <p>
  Token Address:
  <span className="token-address">
    <span className="address">
      0x87c70E86D8eB816B5685cAb4515B168Aa9d2297c
    </span>
    <FaClipboard />
  </span>
</p>
<p>
  Pair Address:
  <span className="token-address">
    <span className="address">
      0x87c70E86D8eB816B5685cAb4515B168Aa9d2297c
    </span>
    <FaClipboard />
  </span>
</p>


 </div>
        </div>
        <div className="funding-hero-image">
          <div className="card-container" style={{ backgroundColor: "#F9FEEA", color: "black" }}>
            <div className="next-price-text">
              <h6>NEXT PRICE INCREASE IN</h6>
            </div>
            <div className="time-card">
              <div className="time-duration">
                <span>{String(timeLeft.days).padStart(2, '0')}</span>
                <span>Days</span>
              </div>
              <div className="time-duration">
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span>Hours</span>
              </div>
              <div className="time-duration">
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span>Minutes</span>
              </div>
              <div className="time-duration">
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
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
                <div className="progressbar-container_us" style={{ marginTop: '20px' }}>
                    <div className="progressbar-complete" style={{ width: `${formattedPercentage}%` }}>
                    </div>
                    <div className="progress_us">
                      <span style={{ fontWeight: 'bold' }}>{`${formattedPercentage}%`}</span>
                      <span>({TotalBJ - remainingBJ   } BJ Remaining)</span>
                    </div>
                  </div>
                   <span style={{fontWeight:'bolder'}} >  No of Holders:  1000 </span>
            <span style={{fontWeight:'bolder'}} > USDT RAISED:  $160,010.56 </span>
               <span style={{fontWeight:'bolder'}} >  Your purchased BadJoke : 0 </span>
            </div>

            <h2 className="hr-lines">1 BJ = $0.000294</h2>
            <div className="currency-btn">
              <div className="input-container">
                <input
                  className="eth-btn"
                  placeholder="1 USDT"
                  name="USDT"
                  value={usdtAmount}
                  onChange={handleUsdtChange}
                  style={{ color: "white", height: "50px" }}
                />
                <img src={usdtImage} alt="USDT" className="input-icon" />
              </div>
              <div className="input-container">
                <input
                  placeholder={bjAmount ? bjAmount.toFixed(2) + " BJ" : "0 BJ"}
                  className="btc-btn"
                  name="BJ"
                  disabled={true}
                  style={{ color: "black", height: "50px" , backgroundColor:'#f7cb46' }}
                />
                <img src={bjImage} alt="BJ" className="input-icon" />
              </div>
            </div>
            <div style={{ marginTop: "8px", textAlign: "center" }}>
              <span>0x87c70E86D8eB816B5685cAb4515B168Aa9d2297c</span>
            </div>
            <div className="wallet-btn">
              <button>Buy</button>
            </div>
            {/* <div style={{ marginTop: "10px", textAlign: "center", color: "black", fontWeight: "700" }}>
             
            </div> */}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FundingHero;
