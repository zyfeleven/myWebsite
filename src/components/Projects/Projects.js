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
import codeEditor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";
import chatify from "../../Assets/Projects/chatify.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">AI & Research Work</strong>
        </h1>
        <p style={{ color: "black" }}>
          Newer work from my MSc research, internship, and current independent projects.
        </p>
        <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              hasGithub={false}
              title="CIFR - Agentic Multi-Model LLM Framework"
              description="My MSc thesis project: a checker-driven iterative repair framework that orchestrates Claude, OpenAI GPT, and Gemini to solve university teacher assignment. I benchmarked MILP, genetic algorithms, simulated annealing, tabu search, and multi-LLM agents on real department data, then built a hybrid LLM-to-MILP pipeline that reduced MILP repair time from about 2 hours to about 1 minute."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              hasGithub={false}
              title="Mise - Kitchen Inventory Mobile App"
              description="An in-progress local-first React Native (Expo) app for home kitchen inventory management. It uses SQLite for offline storage, bilingual Chinese/English UX, and a Node.js/GCP Cloud Run backend that proxies Qwen2.5-VL for photo inventory intake, consumption logging, recipe structuring, and shopping-list categorization."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              hasGithub={false}
              title="AI Document Processing Pipeline"
              description="Built during my Wizewerks internship: a full-stack OCR and LLM document-processing workflow across React, REST APIs, Google Cloud Run, Cloud Functions, Pub/Sub, Google Document AI, Prisma, and PostgreSQL. The pipeline supports ingestion, classification, structured extraction, retries, observability, and audit-friendly data validation."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              hasGithub={true}
              linkLabel="arXiv"
              title="Vision-Language Models for Optimization"
              ghLink="https://arxiv.org/abs/2601.12744"
              description="Second author on an IEEE ICC 2026 accepted paper benchmarking vision-language models for generating optimization code from annotated network topology sketches. The work evaluates multimodal versus text-only inputs across IntentOpt, a benchmark of 85 optimization problems in 17 categories, with an MCP-based deployment case study."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GNN}
              isBlog={false}
              hasGithub={true}
              title="Graph Clustering for Vehicular Edge Networks"
              ghLink="https://github.com/zyfeleven/veins_with_GNN"
              description="Built a graph clustering pipeline for vehicular edge networks using a Graph Autoencoder with PyTorch, PyTorch Geometric, and SAGEConv. The model was trained through link prediction and evaluated against scikit-learn baselines with silhouette score, Davies-Bouldin index, and adjusted Rand index."
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          Earlier <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "black" }}>
          I kept the original project archive here and updated the descriptions where useful.
        </p>
        <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={habit}
              isBlog={false}
              hasGithub={true}
              title="Habit Tracker Website"
              ghLink="https://github.com/kphillippo/habit-tracker"
              description="A full-stack habit tracker built with React, Express.js, MongoDB, and RESTful APIs across four Agile sprints. I contributed to feature implementation, code reviews, branch/PR management, sprint coordination, testing documentation, and onboarding notes."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              hasGithub={true}
              title="Chess Game"
              description="A Java chess game that supports player-versus-player and player-versus-AI gameplay. The AI uses minimax with alpha-beta pruning to improve move search efficiency."
              ghLink="https://github.com/zyfeleven/chessProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              hasGithub={true}
              title="Blog Website"
              description="A full-stack blog website with user login, React/Redux front end, Bootstrap styling, Express REST APIs, and MongoDB persistence."
              ghLink="https://github.com/zyfeleven/blog-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={writing}
              isBlog={false}
              hasGithub={false}
              title="English-Learning Website"
              description="A web application for Chinese students preparing for IELTS writing. I worked on the front-end team, designing and building React components that supported writing evaluation and user interaction flows."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={war}
              isBlog={false}
              hasGithub={true}
              title="Java Text Game: War of Villages"
              ghLink="https://github.com/zyfeleven/VillageGame"
              description="A Java text game built with MVC architecture and object-oriented design. The project explores interactive gameplay structure and was planned for real-time TCP-based interaction."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              hasGithub={true}
              title="SQL Tables and Triggers Design"
              ghLink="https://github.com/zyfeleven/SQL-group-project"
              description="A team database project using PL/pgSQL. We designed relational tables, implemented triggers, and tested the database on Linux."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
