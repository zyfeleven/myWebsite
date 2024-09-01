import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import blog from "../../Assets/Projects/blog.png";
import writing from "../../Assets/Projects/writing.jpg";
import GNN from "../../Assets/Projects/sumo_map2.png";
import chess from "../../Assets/Projects/chess.jpg";
import war from "../../Assets/Projects/war_of_villages.png";
import sql from "../../Assets/Projects/sql.png";
import habit from "../../Assets/Projects/habittracker.png";

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
        <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={habit}
              isBlog={false}
              hasGithub={true}
              title="Habit tracker website"
              ghLink="https://github.com/kphillippo/habit-tracker"
              description="A well-designed website for habit-tracking where you become better yourself and find some friends with same hobbies. "
            />  
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              hasGithub={true}
              title="Chess game"
              description="A chess game created using Java that allows player-versus-player or player-versus-AI gameplay. The AI is designed using the minimax algorithm, enhanced with alpha-beta pruning for efficiency. "
              ghLink="https://github.com/zyfeleven/chessProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              hasGithub={true}
              title="Blog Website"
              description="A blog website that includes a user login system. Use React and Redux for the front-end and Bootstrap for styling. MongoDB manages the data, and I connect the front-end and back-end using express and RESTful APIs."
              ghLink="https://github.com/zyfeleven/blog-website"
            />  
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={writing}
              isBlog={false}
              hasGithub={false}
              title="English-learning Website"
              description="A website that helps Chinese students learn English, focusing on evaluating their IELTS writing skills. As part of the front-end team, I design and build dependable React components to enhance user interactions."
            />  
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={war}
              isBlog={false}
              hasGithub={true}
              title="Java text game: War of Villages"
              ghLink="https://github.com/zyfeleven/VillageGame"
              description="A java text game following MVC architecture and OOP paradigim. It's planned to be real time, interactive by implementing TCP."
            />  
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              hasGithub={true}
              title="SQL tables and triggers design"
              ghLink="https://github.com/zyfeleven/SQL-group-project"
              description="Working as part of a team, we designed and developed a dependable database using PL/pgSQL. We implemented and tested the database on a Linux system."
            />  
          </Col>
          
          
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Researches </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GNN}
              isBlog={false}
              hasGithub={true}
              title="GNN for Managing High-Mobility Vehicular Edge Networks"
              ghLink="https://github.com/zyfeleven/veins_with_GNN"
              description="Explore the application of Graph Neural Networks (GNNs) as a solution to the resource allocation optimization problem within the VEC framework."
            />  
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
