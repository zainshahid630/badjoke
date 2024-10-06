import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Frequentlyquestion from "../Faqs";
import "./faq.css";
import { FaPlus } from "react-icons/fa";

const FAQs = () => {
  return (
    <div style={{ background: 'rgb(37, 37, 37)' }}>
     <div className="faq-heading">
      <span >FREQUENTLY ASKED <span className="questions-head">QUESTIONS</span></span>
     </div>
      <div className="faqs-card">
        <div className="faq-wrapper">
          <div className="faq-questions">
            <p className="faq-text">What is PEXIUM?</p>
            <FaPlus />
          </div>
          <hr />
          <div className="faq-questions">
            <p className="faq-text">How can I buy PEXIUM?</p>
            <FaPlus />
          </div>
          <hr />
          <div className="faq-questions">
            <p className="faq-text">What is the Utility of PEXIUM Coin?</p>
            <FaPlus />
          </div>
          <hr />
          <div className="faq-questions">
            <p className="faq-text">
              Why totally PEXIUM, why not any other coin?
            </p>
            <FaPlus />
          </div>
          <hr />
          <div className="faq-questions">
            <p className="faq-text">What are the benefits of PEXIUM?</p>
            <FaPlus />
          </div>
          <hr />
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default FAQs;
