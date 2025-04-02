import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Normally, here you'd send the form data to a backend or API
    console.log(formData);

    // Show a success alert on successful submission
    setShowAlert(true);

    // Reset the form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Container className="my-5 py-4">
      <Row className="text-center mb-4">
        <Col>
          <h1>Contact Us</h1>
          <p>If you have any questions or concerns, feel free to reach out to us!</p>
        </Col>
      </Row>

      <Row>
        <Col md={8} className="mx-auto">
          {showAlert && (
            <Alert variant="success">
              Thank you for contacting us! We'll get back to you soon.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;

