import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../../assets/style.css";

function ContactMe() {
  return (
    <div>
      <Container id="contact">
        <div className="secondPage">
          <Card className="text-center">
            <Card.Header>Contact Me</Card.Header>
            <Card.Body>
              <Card.Title>Here's How To Get In Touch!</Card.Title>
              <Card.Text>
                Feel free to reach me by these forms of contact. Also check out
                the links for more about me!
              </Card.Text>
              <hr></hr>
              <Card.Text>
                <Row>
                  <Col>
                    <h3>Phone Number:</h3>
                    <h4>830-374-7009</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>Email:</h3>
                    <address>
                      <Button id="email" type="submit">
                        <a href="mailto:guzmanxavi112@gmail.com">
                          guzmanxavi112@gmail.com
                        </a>
                      </Button>
                    </address>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>Downloadable Resume:</h3>
                    <Button id="resume" type="submit">
                      <a href="https://drive.google.com/file/d/1ox_J2H01PpK2pcBqsaGsVu3cqHsXIWFF/view?usp=sharing">
                        Resume
                      </a>
                    </Button>
                  </Col>
                </Row>
              </Card.Text>
              <div id="social" className="module">
                <Card.Link
                  id="social-images"
                  href="https://github.com/XavierG13"
                  target="_blank"
                >
                  <i className="fab fa-3x fa-github"></i>{" "}
                </Card.Link>
                <Card.Link
                  id="social-images"
                  href="https://www.linkedin.com/in/xavierguzman1993/"
                  target="_blank"
                >
                  <i className="fab fa-3x fa-linkedin"></i>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default ContactMe;

/* <h2>Connect with Me</h2>
            <a href="" target="_blank"><img src="assets/images/github.png"></img></a>
            <a href="https://www.linkedin.com/in/xavierguzman1993/" target="_blank"><img
                    src="assets/images/linkedin.png"></img></a> */
