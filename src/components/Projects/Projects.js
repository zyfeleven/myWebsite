import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import blog from "../../Assets/Projects/blog.png";
import writing from "../../Assets/Projects/writing.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import chess from "../../Assets/Projects/chess.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              hasGithub={true}
              title="Chess game"
              description="A chess game developed by Java. Support PVP or PVAI. The AI is implemented using minimax algorithm with alpha-beta purning. "
              ghLink="https://github.com/zyfeleven/chessProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              hasGithub={true}
              title="Blog Website"
              description="A blog website with user-authentication system. Utilizing React&Redux and Bootstrap in the frontend. MangoDB is used for information management. Utilizing RESTful APIs between frontend and backend."
              ghLink="https://github.com/zyfeleven/blog-website"
            />  
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={writing}
              isBlog={false}
              hasGithub={false}
              title="English-learning Website"
              description="An English-learning website for Chinese students, specilized for IELTS writing evaluation. As a member in the front-end team, desgin and implement reliable React components for user interactions."
            />  
          </Col>
          
          
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Researches </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={writing}
              isBlog={false}
              hasGithub={false}
              title="Apply GNN in Vehicle Edge Computing"
              description="Worked closely with a professor and masters student to conduct research on the application of 
              Graph Neural Networks (GNN) in the domain of Vehicle Edge Computing."
            />  
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
