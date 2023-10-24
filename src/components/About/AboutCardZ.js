import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCardT() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span className="tag" style={{ background: 'LightCoral' }}>混乱善良</span>
          <span className="tag" style={{ background: 'MediumSpringGreen'}}>半精灵</span> 
          
          <span className="tag" style={{ background: 'LimeGreen'}}>森林之友</span> 
            <br /> 扎希尔出生在<span style={{ color: 'lightgreen' }}>西哈特兰德</span>，与母亲及其他木精灵一同生活在森林深处。作为半精灵，他无法被村民们完全接受，只有村中的一位德鲁伊温暖而平等地对待他。
            这引领着他确定了愿意奉献一生的事业——成为一位优秀的、乐于帮助所有善良生灵的<span style={{ color: 'lightgreen' }}>德鲁伊</span>。
            也许他是初出茅庐，有些腼腆，还带着几分天真，但扎希尔明白自己应该在什么时候成为同伴们的得力帮手，又应该在什么时候变成一团好动的毛球。
            <br />扎希尔此刻担任坚果物流的<span style={{ color: 'lightgreen' }}>首席财务官</span>，希望可以通过德鲁伊的魔法和自由经济的魔法来让冰风谷的居民再次爱上大自然。
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />对动物们做过的最“残忍”的事：<span style={{ color: 'lightgreen' }}>时不时要抱着它们碎碎念</span>
            </li>
            <li className="about-activity">
            
              <ImPointRight /> 最近才搞明白自己的<span style={{ color: 'lightgreen' }}>性取向</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> 我的上辈子：<span style={{ color: 'lightgreen' }}>一个改邪归正的女性提夫林盗贼</span>
            </li>
          </ul>

          <p style={{ color: "lightgreen" }}>
            “我也想在一天内变出那么多莓果……”{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: 'lightgreen' }}>扎希尔·莱恩</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCardT;
