// src/pages/ContactUs.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Modal } from "react-bootstrap";
import Button from "../components/Button"; // ✅ Custom Button import
import "./Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowModal(true);
    setFormData({ name: "", email: "", age: "", message: "" });
  };

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
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAge">
                  <Form.Label>Your Child's Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    placeholder="e.g. 10"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Let us know how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button type="submit" label="Send Message" />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank You, {formData.name || "Friend"}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We’ve received your message and will get back to you shortly.
          <br />
          Keep an eye on your inbox for your personalized quote!
        </Modal.Body>
        <Modal.Footer>
          <Button label="Got it!" onClick={() => setShowModal(false)} />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactUs;
