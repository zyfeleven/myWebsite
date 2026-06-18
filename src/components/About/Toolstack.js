import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJetbrains
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">GitHub Actions</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Docker</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">JIRA</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
