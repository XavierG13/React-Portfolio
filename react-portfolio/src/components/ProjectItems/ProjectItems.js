import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import "../../assets/style.css";

function ProjectItems(props) {
  return (
    <div>
      <Container id="project-items">
        <Col className="col-md-6 col-sm-12 projectItems">
          <Card id="p-items" style={{ width: "500px" }}>
            <Card.Img
              id="project-image"
              className="img-thumbnail"
              src={props.img}
              alt={props.alt}
            />
            <Card.Body>
              <Card.Title id="project-text">{props.title}</Card.Title>
              <div id="project-link">
                <Card.Link href={props.github} target="_black">
                  Github Repo
                </Card.Link>
                <Card.Link href={props.deploy} target="_blank">
                  Deployed Site
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
}
export default ProjectItems;
