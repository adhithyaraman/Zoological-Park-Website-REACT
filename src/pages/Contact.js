import React, { useEffect } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        className="contact-hero text-white text-center d-flex align-items-center"
        data-aos="fade-in"
      >
        <Container>
          <h1 className="display-4">Contact Us</h1>
          <p className="lead">We'd love to hear from you. Reach out anytime!</p>
        </Container>
      </div>

      <Container className="my-5">
        <Row>
          <Col md={7} data-aos="fade-right">
            <h2>Send Us a Message</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject of your message" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your message here"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="animated-button">
                Send Message
              </Button>
            </Form>
          </Col>

          <Col md={5} data-aos="fade-left">
            <h2>Contact Details</h2>
            <Card className="mb-3 shadow-sm animated-card">
              <Card.Body>
                <Card.Title>Office Address</Card.Title>
                <Card.Text>
                  123 Web Avenue,
                  <br />
                  React City, JS 45678
                  <br />
                  United States
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-3 shadow-sm animated-card" data-aos-delay="100">
              <Card.Body>
                <Card.Title>Email & Phone</Card.Title>
                <Card.Text>
                  Email: support@yourwebsite.com
                  <br />
                  Phone: +1 (800) 123-4567
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="shadow-sm animated-card" data-aos-delay="200">
              <Card.Body>
                <Card.Title>Business Hours</Card.Title>
                <Card.Text>
                  Monday - Friday: 9am - 6pm
                  <br />
                  Saturday: 10am - 2pm
                  <br />
                  Sunday: Closed
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
