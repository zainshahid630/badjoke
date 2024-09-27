import React from "react";
import "./buy.css";
import war1 from '../../assets/sliders/war1.png';
import lefticon from '../../assets/left-cont.png';
import righticon from '../../assets/right-icon.png';

const Buy = () => {

  const totalPages = 10;
  const currentPage = 5;
  const onPageChange = () => {};

  const maxDots = 10;

  const getPaginationRange = () => {
    const halfMaxDots = Math.floor(maxDots / 2);
    let startPage = Math.max(currentPage - halfMaxDots, 1);
    let endPage = Math.min(startPage + maxDots - 1, totalPages);

    if (endPage - startPage < maxDots - 1) {
      startPage = Math.max(endPage - maxDots + 1, 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx);
  };

  return (
    <div className="buy-container">
      <div className="buy-content">
        <div className="buy-war-info">
          <img src={war1} className="buy-war-image" alt="World War I" />
          <div className="buy-war-text">
            <h2 className="buy-war-title">
              World War I <span className="buy-war-date">(1914–1918)</span>
            </h2>
            <p className="buy-war-description">
              World War I claimed 16–20 million lives, including 10 million military and 7 million civilians.
              The war cost an estimated $186 billion in direct costs. The aftermath saw the collapse of major empires 
              and the redrawing of borders, creating lasting ethnic tensions. The Treaty of Versailles destabilized Germany, 
              leading to future conflicts. The war’s destruction of European infrastructure and economies had long-term global impacts.
            </p>
          </div>
        </div>

        <div className="buy-pagination-container">
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="buy-pagination-btn"
          >
            <img src={lefticon} alt="Previous" />
          </button>

          {getPaginationRange().map((page) => (
            <button
              key={page}
              className={`buy-pagination-dot ${page === currentPage ? "active" : ""}`}
              onClick={() => onPageChange(page)}
            >
              •
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="buy-pagination-btn"
          >
            <img src={righticon} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buy;
