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
                To start, connect your preferred cryptocurrency wallet, such as MetaMask, or any other wallet compatible with our platform. This connection allows you to interact with the contract and securely manage your funds during the token purchase.
                </span>
              </div>
            </div>

            <div className="text-content-wrapper">
              <div>
                <img src={number2} alt="" />
              </div>

              <div className="content-description">
                <p>Add Promo Code</p>
                <span>
                If you have a promo code, make sure to enter it here. Applying a valid promo code can give you bonus tokens or other exclusive benefits during your purchase.
                </span>
              </div>
            </div>

            <div className="text-content-wrapper">
              <div>
                <img src={number3} alt="" />
              </div>
              <div className="content-description">
                <p>Add Referral Link</p>
                <span>
                Have a referral link? Enter it in this section to unlock additional rewards for both you and the referrer. This is your chance to maximize your benefits through our referral program.
                </span>
              </div>
            </div>


            <div className="text-content-wrapper">
              <div>
                <img src={number3} alt="" />
              </div>
              <div className="content-description">
                <p>Finalize Purchase</p>
                <span>
                Once everything is set—wallet connected, promo code and referral link (if applicable) added—simply click the 'Buy' button. This will initiate the transaction, allowing you to purchase the tokens and complete your participation in the sale.
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
