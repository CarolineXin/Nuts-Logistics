import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span className="tag" style={{ background: 'teal' }}>中立善良</span>
          <span className="tag" style={{ background: 'MediumVioletRed ' }}>半兽人</span> 
          <span className="tag" style={{ background: 'maroon' }}>战斗大师</span>
            <br /> 阿祖尔出生于谷地河西，被两位母亲抚养带大。一位母亲拉拉·贝斯柯<span style={{ color: 'pink' }}>Lara Biscoe</span>塑造她的体魄、勇气、稳健的技艺，
            另一位母亲阿尔文<span style={{ color: 'pink' }}>Arveene</span>则赋予她善良、仁慈、守护的决心。
            即使时而笨拙、言不达意，阿祖尔本质上仍是一位希望能以强大武力守护他人的善良战士。
            <br />阿祖尔此时身担坚果物流<span style={{ color: 'pink' }}>安保部与慈善部部长</span>，希望能凭借手中之剑为冰风谷夺还太阳。
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 会有好感的女性类型：<span style={{ color: 'pink' }}>坚强或仁慈，又或者两者兼具</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> 喜欢的季节：<span style={{ color: 'pink' }}>谷地长满麦穗的秋天</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> 我的秘密是：<span style={{ color: 'pink' }}>？？？</span>
            </li>
          </ul>

          <p style={{ color: "pink" }}>
            "在我们河西，男人都是不能上桌吃饭的……"{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: 'pink' }}>阿祖尔</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
