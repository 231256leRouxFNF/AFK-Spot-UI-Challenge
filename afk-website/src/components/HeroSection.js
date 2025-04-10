// src/components/HeroSection.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "./Button";
import "./HeroSection.css";
import HeroImg from "../assets/9.svg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="hero-image-col">
            <img
              src={HeroImg}
              alt="Coding kids illustration"
              className="hero-image"
            />
          </Col>
          <Col md={6} className="hero-text">
            <h1 className="hero-title">
              <span className="Heading1">Are you ready to be a</span>
              <br />
              <span className="Heading2">FutureCoder?</span>
            </h1>
            <p className="hero-subtext">
              Join our fun and interactive 10-month coding program designed for
              kids aged 8 to 13. Learn to code with games, creativity, and
              real-world tools.
            </p>
            <Button
              label="Enroll Now"
              onClick={() => (window.location.href = "/contact")}
              className="button"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
