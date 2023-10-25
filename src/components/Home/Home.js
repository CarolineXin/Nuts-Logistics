import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MediaQuery from 'react-responsive';

import homeLogo from "../../Assets/home-main.svg";
import homeLogonew from "../../Assets/logo2.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <MediaQuery query="(min-device-width: 768px)">

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontSize:"50px"}} className="heading">
                我们是{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                🌰
                </span>
              </h1>

              <h1 style={{fontSize:"75px"}} className="heading-name">
                <strong>坚果物流 </strong>
                <strong className="main-name"> <br></br>NUTS LOGISTICS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                // src={homeLogo}
                src={homeLogonew}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </MediaQuery>

      <MediaQuery query="(max-device-width: 768px)">

        <Container className="home-content" style={{padding:"10px", margin:0}}>
            <div>
              <img
                // src={homeLogo}
                src={homeLogonew}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </div>
            <div className="home-header" style={{padding:0}}>
              <h1 style={{ fontSize:"40px"}} className="heading">
                我们是{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                🌰
                </span>
              </h1>

              <h1 style={{fontSize:"50px"}} className="heading-name">
                <strong>坚果物流 </strong>
                <strong className="main-name"> <br></br>NUTS LOGISTICS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </div>
        </Container>
      </MediaQuery>


      </Container>
    </section>
  );
}

export default Home;
