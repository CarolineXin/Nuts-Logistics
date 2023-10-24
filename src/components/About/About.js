import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import azuarImg from "../../Assets/azuar.png";
import zashierImg from "../../Assets/z-a-hir.png";
import hornImg from "../../Assets/hornraven.png";
import antiImg from "../../Assets/antinoa.png";
import Toolstack from "./Toolstack";
import AboutCardT from "./AboutCardT";
import AboutcardZ from "./AboutCardZ";

import AboutcardA from "./AboutCardA";
import AboutcardH from "./AboutCardH";
import tttImg from "../../Assets/tttttpng.png";
import Home2 from "../Home/Home2";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
      {/* Azuar */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              阿祖尔 <strong style={{ color: 'pink' }}>Azuar</strong>
            </h1>
            <Aboutcard />
          </Col>
          
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
            className="about-img slideRight "
          >
            <img src={azuarImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Zashier */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
            className="about-img slideLeft "
          >
            <img src={zashierImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSizeZ: "2.1em", paddingBottom: "20px" }}>
              扎希尔·莱恩 <strong style={{ color: 'LightGreen ' }}>Zashier Rein</strong>
            </h1>
            <AboutcardZ />
          </Col>
          
        </Row>

        {/* Hornraven */}
              <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              纳撒尼尔·角鸦 <strong style={{ color: 'rgb(0, 47, 167)' }}>Nathaniel Hornraven</strong>
            </h1>
            <AboutcardH />
          </Col>
          
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
            className="about-img slideRight "
          >
            <img src={hornImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Antinoa */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
            className="about-img slideLeft "
          >
            <img src={antiImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSizeZ: "2.1em", paddingBottom: "20px" }}>
            安缇诺雅 <strong style={{ color: '#8470FF' }}>Antinoa</strong>
            </h1>
            <AboutcardA />
          </Col>
          
        </Row>

        {/* TTTTT */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              汀汀汀·汀汀 <strong style={{ color: 'LightYellow' }}>TTT.TT</strong>
            </h1>
            <AboutCardT />
          </Col>
          
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
            className="about-img slideRight "
          >
            <img src={tttImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default About;
