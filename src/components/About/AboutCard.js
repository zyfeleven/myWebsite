import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Yifan Zhu</span>, a
            recent MSc Computing graduate from{" "}
            <a
              href="https://www.queensu.ca/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span className="purple">Queen's University</span>
            </a>
            .
            <br />
            <br />
            My work spans full-stack software engineering, GCP serverless
            systems, document AI, graph machine learning, and optimization
            research. During my Wizewerks internship, I built OCR and
            LLM-powered document-processing workflows across React, REST APIs,
            Cloud Run, Cloud Functions, Pub/Sub, Prisma, and PostgreSQL.
            <br />
            <br />
            My thesis research explores checker-driven multi-LLM repair for
            university teaching assignment, comparing LLM agents with MILP and
            metaheuristic optimization. I also co-authored an IEEE ICC 2026
            paper on vision-language models for optimization-driven intent
            processing in autonomous networks.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Full-stack and cloud engineering
            </li>
            <li className="about-activity">
              <ImPointRight /> LLM systems with deterministic verification
            </li>
            <li className="about-activity">
              <ImPointRight /> Optimization, data, and applied machine learning
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
