// src/pages/ContactUs.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="contact-card">
              <h2 className="contact-h2">Contact Our Team</h2>
              <p className="contact-subtext">
                Have a question or ready to enroll? Fill in the form and we’ll
                get back to you within 24 hours.
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Full name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="you@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAge">
                  <Form.Label>Your Child's Age</Form.Label>
                  <Form.Control type="number" placeholder="e.g. 10" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Let us know how we can help..."
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
