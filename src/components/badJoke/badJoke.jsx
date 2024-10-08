import React from "react";
import img1 from "../../assets/newsbtc.svg.png";
import img2 from "../../assets/techopedia.svg.png";
import img3 from "../../assets/coingape.svg fill.png";
import img4 from '../../assets/coinpedia.svg.png'
import img5 from '../../assets/cryptonews.svg.png'
import img6 from '../../assets/insidebitcoin.svg.png'

import "./badJoke.css";

const data = [img1, img2, img3  , img4 , img5 , img6 , img1 , img2, img3  , img4 , img5 , img6 ];

const Paxium = () => {
  return (
    <div className="Paxium-container">
          <h1 className="Paxium-heading">
           featured in
          </h1>
      <div className="Paxium-wrapper">

        <div className="Paxium-content">
       
          <div className="Paxium-scroll-wrapper">
            <div className="Paxium-scroll">
              {data.map((itm, idx) => (
                <div key={idx} className="Paxium-item">
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

export default Paxium;
