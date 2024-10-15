import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Frequentlyquestion from "../Faqs";
import "./faq.css";
import { FaPlus } from "react-icons/fa";

const FAQs = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleToggle = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const questions = [
    { 
      question: "What is PEXIUM?", 
      answer: "Buying PAXIUM is easy! Simply click on 'Connect Wallet', and purchase PAXIUM tokens through your wallet. " 
    },

    { 
      question: "Why totally PEXIUM, why not any other coin?", 
      answer: "Paxium addresses the human and economic toll of wars, using its tokenomics to symbolize the impact of conflict and to drive change. By holding Paxium, users support a mission for unity, peace, and rebuilding, making it a coin with a meaningful purpose." 
    },
    { 
      question: "What are the benefits of PEXIUM?", 
      answer: "The benefits of Paxium include promoting global peace, raising awareness about the true costs of war, and incentivizing cooperation over conflict. Paxium offers financial rewards through its referral and bonus programs, with tiered bonuses for token buyers and referrers. Additionally, it supports liquidity on decentralized and centralized exchanges, ensuring accessibility and market stability. Holding Paxium also allows individuals to take part in a movement for unity and harmony, making a positive social impact." 
    },
  ];

  return (
    <div style={{ background: 'rgb(37, 37, 37)' }}>
      <div className="faq-heading">
        <span>FREQUENTLY ASKED <span className="questions-head">QUESTIONS</span></span>
      </div>
      <div className="faqs-card">
        <div className="faq-wrapper">
          {questions.map((item, index) => (
            <div key={index}>
              <div className="faq-questions" onClick={() => handleToggle(index)}>
                <p className="faq-text">{item.question}</p>
                <FaPlus />
              </div>
              {expandedQuestion === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default FAQs;
