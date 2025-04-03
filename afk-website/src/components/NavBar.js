// src/components/Navbar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  BookOpenIcon,
  UsersIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            color: "#ff4fcf",
            fontFamily: "Quicksand",
            fontWeight: "700",
            fontSize: "28px",
          }}
        >
          CodeSprouts
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" style={{ gap: "20px" }}>
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              <HomeIcon className="icon" />
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              <UsersIcon className="icon" />
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/curriculum" className="nav-link-custom">
              <BookOpenIcon className="icon" />
              Curriculum
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              <EnvelopeIcon className="icon" />
              Enroll
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
