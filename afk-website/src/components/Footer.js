// src/components/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top">
          <Col md={4} className="footer-brand">
            <h4>FutureCoders</h4>
            <p>Inspiring tomorrow's tech pioneers — today!</p>
          </Col>

          <Col md={4} className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/curriculum">Curriculum</Link>
              </li>
              <li>
                <Link to="/contact">Enroll</Link>
              </li>
            </ul>
          </Col>

          <Col md={4} className="footer-contact">
            <h5>Contact Us</h5>
            <p>+27 830 0033</p>
            <p>123 Tech Explorers Way, Codeville, 0123</p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                <FaTiktok />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col className="text-center">
            <p>
              © {new Date().getFullYear()} FutureCoders. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
