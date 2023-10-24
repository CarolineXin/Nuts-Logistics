import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCardT() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span className="tag" style={{ background: 'teal' }}>中立善良</span>
          <span className="tag" style={{ background: 'pink',color: 'black'}}>晨曦之兔</span> 
            <br /> 汀汀汀·汀汀是一名出没于<span style={{ color: 'LightYellow' }}>剑湾北地的洛山达牧师</span>，有目击者称众多大事件中都有一对神秘的兔耳掠过。
            据说她有一个巨大的<span style={{ color: 'LightYellow' }}>笔记本</span>，里面贴满了兔耳许多年来倾听到的、费伦各地的秘密。敌人时常无法捕捉她的行踪，盟友也一样。
            <br />汀汀汀正在考虑成为坚果物流的<span style={{ color: 'LightYellow' }}>天使投资人</span>，不过尚未决定是否要以正式身份给予这家初创公司更多的信任与支持。
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 最喜欢的食物：<span style={{ color: 'LightYellow ' }}>产自谷地的胡萝卜</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span style={{ color: 'LightYellow' }}>其实只能蹦跳着行进</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> 我的真实身份是：<span style={{ color: 'LightYellow' }}>？？？</span>
            </li>
          </ul>

          <p style={{ color: "LightYellow" }}>
            “兔好，人还行。”{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: 'LightYellow' }}>汀汀汀·汀汀</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCardT;
