import React from "react";
import img1 from "../../assets/newsbtc.svg.png";
import img2 from "../../assets/techopedia.svg.png";
import img3 from "../../assets/coingape.svg fill.png";
import img4 from '../../assets/coinpedia.svg.png'
import img5 from '../../assets/cryptonews.svg.png'
import img6 from '../../assets/insidebitcoin.svg.png'

import "./badJoke.css";

const data = [img1, img2, img3  , img4 , img5 , img6 , img1 , img2, img3  , img4 , img5 , img6 ];

const badJoke = () => {
  return (
    <div className="badJoke-container">
          <h1 className="badJoke-heading">
           featured in
          </h1>
      <div className="badJoke-wrapper">

        <div className="badJoke-content">
       
          <div className="badJoke-scroll-wrapper">
            <div className="badJoke-scroll">
              {data.map((itm, idx) => (
                <div key={idx} className="badJoke-item">
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

export default badJoke;
