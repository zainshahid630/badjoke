import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Frequentlyquestion from "../Faqs";
import './faq.css';
import image from '../../assets/Faq.png';

const FAQs = () => {
  return (
    <section className="FAQs-container container-fluid text-center">
      <Row>
        <Container>
          <Row>
            <Col xl="12" lg="12">
              <div className="FAQs-title">
                <p className="FAQs-heading">
                  Frequently asked <span className="FAQs-highlight">Questions</span>
                </p>
              </div>
            </Col>
            <div className="FAQs-spacer" />
            <Col xl="10" lg="10">
              <Frequentlyquestion />
            </Col>
            <div className="FAQs-spacer" />
          </Row>
        </Container>
      </Row>
    </section>
  );
};

export default FAQs;
