import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1>About QuickMart</h1>
          <p>Your one-stop shop for everything you need!</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                At QuickMart, we are committed to providing our customers with a wide range of high-quality products at affordable prices. Whether you’re shopping for groceries, electronics, fashion, or home goods, we have it all.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                We believe in customer satisfaction, fast delivery, and seamless online shopping experiences. Our team works tirelessly to ensure that you have a pleasant and hassle-free shopping experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Why Choose Us?</Card.Title>
              <Card.Text>
                QuickMart offers a range of features to make your shopping easy and fun. From easy navigation, fast checkout, secure payment methods to reliable customer service – we have everything you need!
              </Card.Text>
              <Button variant="primary" href="/">Start Shopping</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
