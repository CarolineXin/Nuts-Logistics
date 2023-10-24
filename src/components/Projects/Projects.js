import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import lathander from "../../Assets/Projects/Symbol of Lathander.jpg";
import care1 from "../../Assets/Projects/carekonig.png";
import care2 from "../../Assets/Projects/care2.png";
import eastheaven from "../../Assets/Projects/eastheaven.png";

import AnimatedNumbers from "react-animated-numbers";
import Toolstack from "../About/Toolstack";

function Projects() {
  const [num, setNum] = React.useState(2845);
  return (
    <Container fluid className="project-section" style={{marginBottom:"70px"}}>
      <Particle />

      <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontSize:"50px",textAlign: "right" }} className="heading">
                迄今，我们已经运送了
                <span className="wave" role="img" aria-labelledby="wave">
                🌰
                </span>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <AnimatedNumbers
        includeComma
        animateToNumber={num}
        fontStyle={{ fontSize: 120 }}
        locale="en-US"
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers>
            </Col>
          </Row>
        </Container>

      <Container>

        <h1 className="project-heading">
          我们的 <strong className="purple">优质服务 </strong>
        </h1>
        <p style={{ color: "white" }}>
        我们通过独具匠心的物流服务，为您带来最良好的物流体验。
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="独特运送方式"
              description="坚果物流拥有多种独特交通工具，包括斧嘴鸟、雪橇犬、犬拉雪橇和枭熊。这些工具确保我们提供高效、可靠的物流服务，无论是富裕的布林·山德还是浮冰之海。我们不断创新，以满足客户的需求。"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="甄选野外工具"
              description="坚果物流提供甄选野外工具，包括两座坚固的帐篷，两台便携火炉，以及一群可爱的小松鼠，确保物流人员在野外冒险中拥有安全、舒适和愉快的体验。无论是露营还是探险，这些工具都将成为员工们的得力助手。"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="高端魔法科技"
              description="坚果物流的高级技术顾问尼尔达·荒日，创新发明了魔法雪橇。它不仅能在各种极端环境下顺畅运行，还具备快速、安全的特性，让我们的物流服务更加高效。这项高端魔法科技标志着我们对物流行业的承诺，不断推动着技术的前沿，为客户提供卓越的体验。"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

        </Row>
      </Container>

      <container>
      <h1 className="project-heading" style={{ marginTop: '100px' }}>
          我们的 <strong className="purple">合作伙伴 </strong>
        </h1>
      <Row>
        <p style={{ color: "white" }}>
        我们的伙伴网络广泛，从神明、城市发言人到骨雕匠人，多元化的社群支持我们提供高质量的物流服务。
        </p>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={lathander}
              isBlog={false}
              title="洛山达，晨曦和复兴之神"
              description="我们自豪地与神明洛山达合作，这位代表春天、诞生和革新的神明赐予了坚果物流宝贵的祝福。我们相信，作为被洛山达神明亲自祝福的物流公司，我们将持续提供出色的物流服务，传递活力与希望，就像春天一样充满生机。"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={care1}
              isBlog={false}
              title="凯尔柯尼"
              description="凯尔柯尼坐落在迪尼夏湖岸，这座美丽城镇是坚果物流的第一站，也是我们商业标志的起源地。我们庄严承诺不会遗忘与发言人特洛丝缔结的友好伙伴关系，并感谢她的丰厚馈赠。"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={care2}
              isBlog={false}
              title="凯尔内瓦"
              description="凯尔内瓦向来骄傲于它悠久的历史、精美的防御工事、保存完好的堡垒景点。我们已经与发言人坎奥克·西瓦达成协约，凯尔内瓦由此成为了迪尼夏湖合作圈不可或缺的一员。"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={eastheaven}
              isBlog={false}
              title="东流亡地"
              description="自从东大道铺好后，东流亡地就演变成了边境商人的天堂。我们已与发言人丹尼斯·韦伦（因为谦逊和直率而广受尊敬）达成合作，相信坚果物流能与这座繁荣不息的商业城镇一同成长发展。"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          </Row>
        <Row style={{justifyContent: "center"}}>
        <Col md={6} className="project-card">
        <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title={<h1 className="project-heading">
           <strong className="purple">坚果物流诚邀您的加入！ </strong>
        </h1>}
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
        </Col>
        </Row>
      </container>


    </Container>
  );
}

export default Projects;
