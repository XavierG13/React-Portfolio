import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectItems from "../ProjectItems/ProjectItems";
import myprojects from "./myprojects.json";

// console.log(myprojects);

function Portfolio() {
  return (
    <div id="thirdPage">
      <Container id="projects">
        <Row className="align-items-center text-center">
          {myprojects.map((project) => (
            <ProjectItems
              key={Math.random()}
              title={project.title}
              img={project.img}
              github={project.github}
              deploy={project.deploy}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
