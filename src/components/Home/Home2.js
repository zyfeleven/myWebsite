import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a recent MSc Computing graduate from Queen's University,
              focused on building reliable software systems that combine
              full-stack engineering, cloud services, and applied AI.
              <br />
              <br />
              I work mainly with
              <i>
                <b className="purple"> Python, JavaScript/TypeScript, Java, and SQL. </b>
              </i>
              <br />
              <br />
              My recent work includes production document-processing pipelines
              on <b className="purple">Google Cloud Platform</b>, React and
              Node.js applications, and LLM-assisted workflows for OCR,
              classification, and structured data extraction.
              <br />
              <br />
              My research centers on{" "}
              <i>
                <b className="purple">optimization, agentic LLM systems, </b>
                and <b className="purple">deterministic verification</b>.
              </i>
              <br />
              <br />
              I like systems where AI proposes, but code checks: using LLMs as
              useful interfaces, repair agents, or extraction tools while
              keeping correctness grounded in tests, schemas, and deterministic
              solvers.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/zyfeleven"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yifan-zhu-a8958a21b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:zyfeleven@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
