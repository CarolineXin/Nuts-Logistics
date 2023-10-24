import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
      </Container>
    </section>
  );
}

export default Home;
