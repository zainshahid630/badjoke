import React from "react";
import img1 from "../../assets/newsbtc.svg.png";
import img2 from "../../assets/techopedia.svg.png";
import img3 from "../../assets/coingape.svg fill.png";
import img4 from '../../assets/coinpedia.svg.png'
import img5 from '../../assets/cryptonews.svg.png'
import img6 from '../../assets/insidebitcoin.svg.png'

import "./ibar.css";

const data = [img1, img2, img3  , img4 , img5 , img6 , img1];

const Ibar = () => {
  return (
    <div className="ibar-container">
      <div className="ibar-wrapper">
        <div className="ibar-content">
          <p className="ibar-heading">
            We are featured in
          </p>
          <div className="ibar-scroll-wrapper">
            <div className="ibar-scroll">
              {data.map((itm, idx) => (
                <div key={idx} className="ibar-item">
                  <img src={itm} alt="feature" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ibar;
