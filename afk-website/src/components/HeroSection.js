// src/components/HeroSection.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";
import heroImage from "../assets/layered-waves-haikei.svg"; // renamed from blob

const HeroSection = () => {
  return (
    <div className="hero-section position-relative overflow-hidden">
      <img src={heroImage} alt="Decorative Shape" className="hero-blob" />
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={7}>
            <h1 className="hero-title">Welcome to CodeSprouts</h1>
            <p className="hero-subtext">
              Join our fun and interactive 10-month coding program designed for
              kids aged 8 to 13.
            </p>
            <Button className="hero-button">Enroll Now</Button>
          </Col>
          <Col md={5} className="mt-4 mt-md-0">
            <img
              src="/assets/hero-image.svg"
              alt="Kids coding"
              className="img-fluid hero-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
