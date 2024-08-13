import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "../../utils/constants";
import './faq.css'
const FAQs = () => {
  return (
    <div className="faqs-container">
      <div className="faqs-wrapper">
        <div>
          <h2 className="faqs-header">FAQs</h2>
          <p className="faqs-description">Your questions, answered.</p>
        </div>
        <div className="faqs-content">
          {faqs.map((itm, idx) => (
            <FAQ key={idx} q={itm.q} a={itm.a} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ q, a }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => setActive((prev) => !prev)}
      className={`faq-item ${active ? "active" : ""}`}
    >
      <div className="faq-item-header">
        <FaChevronDown
          size={18}
          className={`faq-icon ${active ? "rotate" : ""}`}
        />
        <span className="faq-question">{q}</span>
      </div>
      {active && <p className="faq-answer">{a}</p>}
    </div>
  );
};

export default FAQs;
