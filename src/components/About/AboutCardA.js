import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCardT() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span className="tag" style={{ background: 'SteelBlue ' }}>混乱中立</span>
          <span className="tag" style={{ background: 'Indigo  '}}>卓尔精灵</span> 
          
          <span className="tag" style={{ background: 'Blue ' }}>剑咏法师</span>
          
          <span className="tag" style={{ background: 'DarkBlue  ' }}>流亡者</span>
          
            <br /> 当她的第二个姐姐死于淬毒的短剑时，安缇诺雅下定决心要逃离那片生养她的地底洞窟。<span style={{ color: '#8470FF' }}>幽暗少女的祭司</span>向她伸出了援手。
            她们带着安缇诺雅逃向地表，并将<span style={{ color: '#8470FF' }}>法术融入剑舞</span>的技艺传授给了她。后来，为了满足对这片大陆的好奇心，她辞别森林，与同伴踏上了冒险的旅途。
            <br />如今安缇诺雅正作为<span style={{ color: '#8470FF' }}>宣传大使</span>为坚果物流的大业奔走，期待着坚果小队的名字有朝一日能传遍冰风谷。
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 安缇诺雅受到的家庭教育中包含<span style={{ color: '#8470FF ' }}>用午餐腌肉实施谋杀</span>的技巧。她觉得那实在太不优雅了。
            </li>
            <li className="about-activity">
              <ImPointRight /> 有时安缇诺雅会<span style={{ color: '#8470FF' }}>用嘲讽表达对某物的欣赏</span>，这也是她与阿祖尔刚见面时差点被当成邪恶地底势力砍死的原因。
            </li>
            <li className="about-activity">
              <ImPointRight /> 我对枭熊的热情：<span style={{ color: '#8470FF' }}>与一本在冒险者间流传甚广的爱情小说密不可分</span>
            </li>
          </ul>

          <p style={{ color: "#8470FF" }}>
            “你想听一个秘密？当然可以，我这儿有很多。”{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: '	#8470FF' }}>安缇诺雅</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCardT;
