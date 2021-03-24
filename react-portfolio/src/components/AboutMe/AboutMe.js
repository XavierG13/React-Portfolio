import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "../../assets/style.css";

function AboutMe() {
  return (
    <div>
      <Container fluid className="About">
        <div className="firstPage">
          <Row>
            <Col id="my-bio">
              <Card className="myBio" style={{ width: "auto" }}>
                <Row>
                  <Col>
                    <Card.Img
                      id="Xavier"
                      variant="top"
                      src="https://github.com/XavierG13/React-Portfolio/blob/4033dc6821bbaeacc407399036649245ff337cba/react-portfolio/src/assets/Images/xavierguzman.png?raw=true"
                    />
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <Card.Body>
                          <Card.Title>About Me</Card.Title>
                          <Card.Text>
                            <p>
                              I am Xavier Guzman, a graduate of the University
                              of Texas at San Antonio with a degree in Business
                              Management with a Concentration of International
                              Business. In the near future I will be pursuing a
                              degree in Cyber Security.
                              <br></br>
                              Some of the skills I have picked up are JQuery,
                              Node, and React to name a few. I have been
                              studying web development and am eager to learn
                              more in this field in pursuit of my goals.
                              <br></br>
                              My field of expertise is with fitness and health
                              which I take pride in helping others achieve their
                              goals. I currently train clients on my off time
                              when I am away from work or the computer. When I
                              am not training I enjoy building model kits,
                              playing video games, and studying up on new
                              material not only for fitness but development as
                              well.
                            </p>
                          </Card.Text>
                        </Card.Body>
                      </Col>
                      <Col>
                        <Card.Img />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default AboutMe;
