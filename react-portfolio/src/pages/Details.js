import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactMe from "../components/ContactMe/Contact";
import Portfolio from "../components/Portfolio/Portfolio";

const Details = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <ContactMe />
        </Col>
        <Col>
          <Portfolio />
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
