// src/pages/ContactUs.js
import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import "./Contact.css"; // Assuming you have a CSS file for styles

const ContactUs = () => {
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center mb-5">
        <Col md={6}>
          <h2 class="contact-h2">Contact Our Team</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" placeholder="Full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Your email</Form.Label>
              <Form.Control type="email" placeholder="yourmail@emaily.com" class="form-els" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>How can we help?</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message here" />
            </Form.Group>

            <Button variant="dark" type="submit">
              Send my message
            </Button>
          </Form>
        </Col>

        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Image
            src="https://via.placeholder.com/500x400"
            alt="Contact Illustration"
            fluid
            rounded
          />
        </Col>
      </Row>

    </Container>
  );
};

export default ContactUs;
