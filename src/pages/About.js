import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import NavigationBar from "../components/NavigationBar";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>

      <div className="about-hero text-white text-center d-flex align-items-center justify-content-center" data-aos="fade-in">
        <Container>
          <h1 className="display-3 fw-bold">About Our Zoo</h1>
          <p className="lead">A sanctuary for wildlife and a center for education, conservation, and family fun.</p>
        </Container>
      </div>

      <Container className="my-5">
        <h2 className="text-center mb-4" data-aos="fade-up">🐾 Our Mission</h2>
        <p className="text-center px-4" data-aos="fade-up" data-aos-delay="100">
          Our zoological park is dedicated to the preservation of biodiversity, the education of future generations,
          and the care of every creature within our gates. We aim to inspire a love for animals and a respect
          for nature through immersive and interactive experiences.
        </p>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4" data-aos="fade-up">🌍 Conservation Efforts</h2>
        <Row>
          <Col md={6} data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1650147222092-7f4071325911?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHpvb2xhZ2lrYWwlMjBwYXJrfGVufDB8fDB8fHww"
              alt="Conservation"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <p>
              We actively partner with global conservation organizations to protect endangered species,
              restore natural habitats, and promote sustainable practices. Every visit to our zoo contributes
              to real-world wildlife preservation.
            </p>
            <ul>
              <li>Breeding programs for endangered species</li>
              <li>Habitat restoration projects</li>
              <li>Public awareness campaigns</li>
              <li>Research and veterinary support</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4" data-aos="fade-up">🧑‍🤝‍🧑 Meet Our Team</h2>
        <Row>
          {[
            {
              name: "Dr. Jane Wilder",
              role: "Lead Veterinarian",
              img: "https://plus.unsplash.com/premium_photo-1673953509982-632a317d1f8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHIuJTIwSmFuZSUyMFdpbGRlcnxlbnwwfHwwfHx8MA%3D%3D",
              delay: 100,
            },
            {
              name: "Mark Safari",
              role: "Wildlife Biologist",
              img: "https://images.unsplash.com/photo-1655658533951-231c1bf5be71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdpbGRsaWZlJTIwQmlvbG9naXN0fGVufDB8fDB8fHww",
              delay: 200,
            },
            {
              name: "Sophie Ranger",
              role: "Education Coordinator",
              img: "https://media.istockphoto.com/id/79064984/photo/children-looking-at-snake.jpg?s=612x612&w=0&k=20&c=sGaBtD8ww1aazrqO5_soeSMbitk7mkarF-YOS4iPzwU=",
              delay: 300,
            },
          ].map((person, i) => (
            <Col md={4} key={i} data-aos="zoom-in" data-aos-delay={person.delay}>
              <Card className="mb-4 text-center team-card">
                <Card.Img variant="top" src={person.img} className="rounded-circle p-3" />
                <Card.Body>
                  <Card.Title>{person.name}</Card.Title>
                  <Card.Text>{person.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4" data-aos="fade-up">📸 Life at the Zoo</h2>
        <Row>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <Col md={4} sm={6} xs={12} className="mb-3" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <img
                src={`https://plus.unsplash.com/premium_photo-1661832611972-b6ee1aba3581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8em9vJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D${i}`}
                alt="Zoo scene"
                className="img-fluid rounded shadow-sm gallery-img"
              />
            </Col>
          ))}
        </Row>
      </Container>

      <div className="cta-section py-5 text-white text-center" data-aos="fade-up">
        <Container>
          <h2>Want to Support Our Mission?</h2>
          <p>Join our membership program, volunteer, or donate to help protect wildlife today.</p>
          <Button variant="light" size="lg" className="animated-button">Get Involved</Button>
        </Container>
      </div>
    </>
  );
};

export default About;
