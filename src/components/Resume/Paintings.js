import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";

import homebg from "../../Assets/home-bg2.jpg";
import logo from "../../Assets/logo.jpg";
import rabbit from "../../Assets/rabbit.jpg";
import credit from "../../Assets/credit.png";
import joke1 from "../../Assets/joke1.jpg";
import joke2 from "../../Assets/joke2.jpg";

import horn from "../../Assets/horn.png";
import emotion from "../../Assets/emotion.png";
import work from "../../Assets/comingtowork.png";

import { AiOutlineDownload } from "react-icons/ai";
import azuarImg from "../../Assets/azuar.png";
import zashierImg from "../../Assets/z-a-hir.png";
import hornImg from "../../Assets/hornraven.png";
import antiImg from "../../Assets/antinoa.png";


function Paintings(){
    return (
      <div>
      <Row style={{ justifyContent: "center" }}>
        <Col md={8} className="project-card">
          <ProjectCard
            imgPath={homebg}
            isBlog={false}
            title="雪原"
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Col md={8} className="project-card">
          <ProjectCard
            imgPath={rabbit}
            isBlog={false}
            title="一份简报"
          />
        </Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={credit}
            isBlog={false}
            title="一张欠条"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={joke1}
            isBlog={false}
            title="一条关于角鸦的笑话"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={joke2}
            isBlog={false}
            title="……还是一条关于角鸦的笑话"
          />
        </Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={emotion}
            isBlog={false}
            title="产生多余情感的小扎"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={horn}
            isBlog={false}
            title="和他所托的非人"
          />
        </Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Col md={8} className="project-card">
          <ProjectCard
            imgPath={work}
            isBlog={false}
            title="坚果物流全家福"
          />
        </Col>
      </Row>
      <div style={{margin:"60px"}}/>
    </div>
    );
}

export default Paintings;