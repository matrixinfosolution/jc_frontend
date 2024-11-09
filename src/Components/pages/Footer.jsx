import React from "react";
import { Col, Row } from "react-bootstrap";
import EnquiryForm from "./EnquiryForm";

function Footer() {
  return (
    <div className="footer-bg">
      <Row>
        <Col style={{ color: "white" }}>
          <h2 style={{ textAlign: "center" }}>Screen</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ad,
            tempora provident sint odio atque ullam voluptatibus, voluptate et
            dolorum consequuntur.
          </p>
        </Col>
        <Col style={{ color: "white" }}>
          <h2 style={{ textAlign: "center" }}>Shop</h2>
          <ul>
            <li>Screen Printing</li>
            <li>DTG</li>
            <li>Heat press printing</li>
            <li>DYE Sublimation</li>
          </ul>
        </Col>
        <Col style={{ color: "white" }}>
          <h2 style={{ textAlign: "center" }}>Links</h2>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Terms & Conditions</li>
            <li>Privacy & Policy</li>
          </ul>
        </Col>
        <Col style={{ color: "white" }}>
          <h2 style={{ textAlign: "center" }}>Enquiry</h2>
          <EnquiryForm />
        </Col>
      </Row>
      <hr className="custom-hr" />
      <div className="d-flex justify-content-center align-items-center text-white">
        <p>2024 , All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
