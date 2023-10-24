import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";

import azuar from "../../Assets/records/Azuar.xlsx";
import anti from "../../Assets/records/Antinoa.xlsx";
import zashi from "../../Assets/records/Zashier.xlsx";
import horn from "../../Assets/records/Hornraven.xlsx";

import { AiOutlineDownload } from "react-icons/ai";
import azuarImg from "../../Assets/azuar.png";
import zashierImg from "../../Assets/z-a-hir.png";
import hornImg from "../../Assets/hornraven.png";
import antiImg from "../../Assets/antinoa.png";


function Records(){
    return (
        <Row>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={azuarImg}
              isBlog={false}
              title="阿祖尔"            
                link = {azuar}
              />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={zashierImg}
              isBlog={false}
              title="扎希尔·莱恩"
              link={zashi}
                            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={hornImg}
              isBlog={false}
              title="纳撒尼尔·角鸦"
              link={horn}
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={antiImg}
              isBlog={false}
              title="安缇诺雅"
              link={anti}
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          </Row>
    );
}

export default Records;