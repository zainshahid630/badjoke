import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaCopy } from "react-icons/fa";

const copyToClipboard = (address) => {
  navigator.clipboard.writeText(address).then(() => {
    alert("Address copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
};

function Frequentlyquestion() {
  const PaxiumAddress = "YOUR_Paxium_ADDRESS"; // Replace with actual address
  const SWAPTOEKNADDRESS = "YOUR_SWAP_TOKEN_ADDRESS"; // Replace with actual address

  return (
    <Accordion className="FAQs-accordion">
      <Accordion.Item eventKey="0" className="FAQs-accordion-item">
        <Accordion.Header className="FAQs-accordion-header">
          What is Paxium? <span></span>
        </Accordion.Header>
        <Accordion.Body className="FAQs-accordion-body">
          Paxium is a unique meme coin launched on the Binance Smart Chain.
          <div style={{ marginTop: '10px' }}>
            <span className="FAQs-copy-text" onClick={() => copyToClipboard(PaxiumAddress)}>
              <FaCopy /> Copy Paxium Address
            </span>
          </div>
          <div style={{ marginTop: '10px' }}>
            <span className="FAQs-copy-text" onClick={() => copyToClipboard(SWAPTOEKNADDRESS)}>
              <FaCopy /> Copy Swap Token Address
            </span>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Frequentlyquestion;
