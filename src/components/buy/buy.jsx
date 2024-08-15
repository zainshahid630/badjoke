import React from "react";
import "./buy.css";
import badjokeimg from "../../assets/buyImg.png";
import number1 from "../../assets/01.svg";
import number2 from "../../assets/02.svg";
import number3 from "../../assets/03.svg";
import tick from '../../assets/tick.svg'

const Buy = () => {
  return (
    <div class="buy-container">
      <div class="buy-content">
        <h2 class="title">HOW TO BUY</h2>
        <div className="content-container">
          <div class="image-container">
            <img src={badjokeimg} alt="Badjoke" />
          </div>
          <div class="text-content">
            <div className="text-content-wrapper">
              <div>
                <img src={number1} alt="" />
              </div>
              <div className="content-description">
                <p>Connect wallet</p>
                <span>
                  To purchase Doge2014 Token you need to connect your wallet,
                  which involves approving the contract on your wallet
                </span>
              </div>
            </div>

            <div className="text-content-wrapper">
              <div>
                <img src={number2} alt="" />
              </div>

              <div className="content-description">
                <p>Participate in Presale</p>
                <span>
                  Visit our presale platform and follow the instructions to
                  purchase Doge2014 tokens using your preferred cryptocurrency.
                </span>
              </div>
            </div>

            <div className="text-content-wrapper">
              <div>
                <img src={number3} alt="" />
              </div>
              <div className="content-description">
                <p>Claim Tokens</p>
                <span>
                  Once the presale is complete, you will be able to claim your
                  Doge2014 tokens into your wallet address.
                </span>
              </div>
            </div>

            <div className="text-content-wrapper">
            <div>
                <img src={tick} alt="" />
              </div>
              <div className="content-description">
                <button className="header-btn-buy">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
