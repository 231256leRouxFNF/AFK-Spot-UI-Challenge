// src/components/Navbar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Make sure this is connected

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="white" class="navbar shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" class="brand-text">
          FutureCoders
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav class="ms-auto nav-links">
            <Nav.Link as={Link} to="/" class="nav-link-text">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" class="nav-link-text">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/curriculum" class="nav-link-text">
              Curriculum
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" class="nav-link-text">
              Enroll
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
