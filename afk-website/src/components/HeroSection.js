// src/components/HeroSection.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col lg={8}>
            <h1 className="hero-title">
              <span className="white-text">Welcome to</span>{" "}
              <span className="pink-text">FutureCoders</span>
            </h1>
            <p className="hero-subtext">
              Join our 10-month adventure in coding — designed for curious kids
              aged 8 to 13. Where young minds explore the universe of code,
              games, and creativity.
            </p>
            <Button href="/contact" className="hero-button">
              Launch Your Journey
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
