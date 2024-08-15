import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "../../utils/constants";
import './faq.css'
import { Col, Container, Row } from "react-bootstrap";
import Frequentlyquestion from "../Faqs";
import image from '../../assets/Faq.png'
const FAQs = () => {
  return (
    <section  className="container-fluid text-center">
    <Row>
      <Container>
        <Row>
          <Col xl="12" lg="12">
          <div  className='mt-5'  style={{color:'#E8FCAF', textAlign:'-webkit-center'  }}> 
                  <img src={image} />
            </div>
          </Col>
          <div className="mb-4" />
          <Col xl="12" lg="12">
            <Frequentlyquestion />
          </Col>
          <div className="mb-4" />
        </Row>
      </Container>
    </Row>
  </section>
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
