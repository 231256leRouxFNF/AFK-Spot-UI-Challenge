// src/components/Navbar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Logo from "../assets/Logo.svg"; 

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm py-3 navbar">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          {/* <img
            src={Logo}
            alt="FutureCoders Logo"
            style={{ height: "40px", width: "auto" }}
          /> */}
          <span className="brand-text">FutureCoders</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/curriculum" className="nav-link-custom">
              Curriculum
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-link-custom enroll-btn"
            >
              Enroll
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
