import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">TS</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">GCP</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">SQLite</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Prisma</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">PyTorch</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">OR-Tools</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">LLM APIs</span>
      </Col>
      
    </Row>
  );
}

export default Techstack;
