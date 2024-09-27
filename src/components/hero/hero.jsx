import React, { useState, useEffect } from "react";
import bgimage from "../../assets/ggif.gif";
import usdtImage from "../../assets/usdt.png";
import bjImage from "../../assets/Logotoken.png";
import "./hero.css";
import { FaClipboard } from "react-icons/fa6";
import twitter from '../../assets/twitter.png';
import discord from '../../assets/dics.png';
import telegram from '../../assets/teleg.png';
import instagram from '../../assets/insta.png';

const FundingHero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 9,
    hours: 4,
    minutes: 8,
    seconds: 47,
  });
  const [usdtAmount, setUsdtAmount] = useState("");
  const [bjAmount, setBjAmount] = useState("");
  const bjRate = 0.000294;
  const remainingBJ = 5000;
  const TotalBJ = 100000;
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
      className="FundingHero-container"
   
    >
      <div className="FundingHero-center">
        <p className="FundingHero-whatis">
          What is <span className="FundingHero-highlight">Paxium</span>
        </p>
      </div>

      <div className="FundingHero-center">
        <p className="FundingHero-peace">
          Peace, Unity, Integrity, and Hope for All.
        </p>
      </div>

      <div className="FundingHero-lorum-container">
        <p className="FundingHero-lorum">
          Lorem ipsum dolor sit amet consectetur. Gravida sit eleifend morbi
          faucibus ut urna. Sem urna arcu massa ultrices nec urna velit.
          Tincidunt nunc lobortis cursus suscipit id ultricies nec. Tellus
          feugiat amet massa nunc.
        </p>
      </div>

      <div className="FundingHero-main-divs">
        <div className="FundingHero-box1">
          <div className="FundingHero-box-padding">
            <div className="FundingHero-box-header">
              <p className="FundingHero-box-title">Slots Available</p>
              <p className="FundingHero-box-number">65,00,000</p>
            </div>
            <p className="FundingHero-box-description">
              You’ll get $10 worth of dollars by clicking on claim free token
            </p>
            <button className="FundingHero-claim-btn">
              <b>CLAIM FREE TOKEN</b>
            </button>
          </div>
        </div>

        <div className="FundingHero-box2">
          <div className="FundingHero-box-padding">
            <p className="FundingHero-input-title">Paste Referral Link</p>
            <input className="FundingHero-input-type" />
            <p className="FundingHero-input-title">Paste Referral Link</p>
            <input className="FundingHero-input-type" />
          </div>
        </div>
      </div>

      <div className="FundingHero-images-link">
        <img src={twitter} alt="Twitter" />
        <img src={discord} alt="Discord" />
        <img src={telegram} alt="Telegram" />
        <img src={instagram} alt="Instagram" />
      </div>
    </div>
  );
};

export default FundingHero;
