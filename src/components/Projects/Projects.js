import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Jave based game: War of Villages"
              description="he game adheres to the MVC (Model-View-Controller) architecture and OOP (Object-oriented-Programming) paradigm, incorporating Factory and Adapter design patterns to enhance codemaintainability. On the server side, I engineered effective APIs to facilitate client-serverinteractions, utilizing the TCP protocol for reliable, real-time communication. For databasemanagement, JDBC was employed to ensure data integrity and security."
              ghLink="https://github.com/zyfeleven/VillageGame"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
