// src/components/Navbar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Make sure this is connected

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          FutureCoders
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/" className="nav-link-text">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-text">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/curriculum" className="nav-link-text">
              Curriculum
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-text">
              Enroll
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
