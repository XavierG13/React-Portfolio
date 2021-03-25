import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutMe from "../components/AboutMe/AboutMe";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <AboutMe />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
