import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center" data-aos="fade-in">
        <Container>
          <h1 className="display-3 fw-bold">Welcome to the Zoological Park</h1>
          <p className="lead">Explore the wonders of wildlife from around the world</p>
          <Button variant="success" size="lg" className="animated-button mt-3">Explore Now</Button>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <img src="https://plus.unsplash.com/premium_photo-1757338342908-cfa9f2b537be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8em9vJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D" alt="Zoo" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2>About Our Zoo</h2>
            <p>
              Our zoological park is home to over 500 species from across the globe. We are dedicated to animal conservation, education, and providing a fun experience for the whole family. Come and discover lions, tigers, elephants, and many more!
            </p>
            <Button variant="outline-success" size="md" className="mt-3">Learn More</Button>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4" data-aos="fade-up">Meet Our Animals</h2>
        <Row>
          {[
            { name: 'African Elephant', img: 'https://plus.unsplash.com/premium_photo-1661831251016-903397d3fe4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWZyaWNhbiUyMEVsZXBoYW50fGVufDB8fDB8fHww', delay: 100 },
            { name: 'Bengal Tiger', img: 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVuZ2FsJTIwVGlnZXJ8ZW58MHx8MHx8fDA%3D', delay: 200 },
            { name: 'Giraffe', img: 'https://plus.unsplash.com/premium_photo-1661813434310-98cca4c9135e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2lyYWZmZXxlbnwwfHwwfHx8MA%3D%3D', delay: 300 },
            { name: 'Penguin', img: 'https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGVuZ3VpbnxlbnwwfHwwfHx8MA%3D%3D', delay: 400 },
            { name: 'Lion', img: 'https://plus.unsplash.com/premium_photo-1664304310991-b43610000fc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGlvbnxlbnwwfHwwfHx8MA%3D%3D', delay: 500 },
            { name: 'Zebra', img: 'https://plus.unsplash.com/premium_photo-1664302719391-9653797f0898?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WmVicmF8ZW58MHx8MHx8fDA%3D', delay: 600 },
          ].map((animal, index) => (
            <Col md={4} className="mb-4" key={index} data-aos="zoom-in" data-aos-delay={animal.delay}>
              <Card className="animal-card shadow-sm h-100">
                <Card.Img variant="top" src={animal.img} />
                <Card.Body>
                  <Card.Title>{animal.name}</Card.Title>
                  <Card.Text>Learn fun facts about our {animal.name}s and their habitats.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="visit-section py-5 bg-light" data-aos="fade-up">
        <Container>
          <h2 className="text-center mb-4">Plan Your Visit</h2>
          <Row>
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <h5>🕒 Opening Hours</h5>
              <p>Mon - Sun: 9:00 AM - 6:00 PM</p>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <h5>🎟️ Tickets</h5>
              <p>Adults: $20 | Kids: $10 | Seniors: $15</p>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="300">
              <h5>📍 Location</h5>
              <p>123 Wildlife Avenue, Green City</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="cta-section py-5 text-white text-center" data-aos="fade-up">
        <Container>
          <h2>Join Our Wildlife Conservation Mission</h2>
          <p>Become a member, adopt an animal, or volunteer today.</p>
          <Button variant="light" size="lg" className="animated-button">Get Involved</Button>
        </Container>
      </div>
    </>
  );
};

export default Home;
