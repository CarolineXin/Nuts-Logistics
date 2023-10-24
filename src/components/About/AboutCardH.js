import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCardT() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span className="tag" style={{ background: 'MidnightBlue ' }}>？？？</span>
          <span className="tag" style={{ background: 'SaddleBrown '}}>伊路斯坎人</span> 
          <span className="tag" style={{ background: 'black '}}>战争牧师</span> 
            <br /> 从年幼时，这名伊路斯坎人就像鸟一般不断迁徙。二十岁时，在匕首谷连绵的<span style={{ color: 'DodgerBlue' }}>卫王战争</span>中、燃烧的尸骸堆升起的青烟中，他终于从高举令旗的贵族子弟纳撒尼尔正式变成与战争相伴的<span style={{ color: 'DodgerBlue' }}>“角鸦”</span>。
            在那之后，角鸦年复一年地在这片大陆上游荡。他寻找有趣的人：跟随他们、观察他们、见证他们的生与死、他们在战争的终末现出的面容。当然，旅途中也有些更无关紧要却使人愉快的目标，为之足以倾尽一名战争牧师的全力——比如一只<span style={{ color: 'DodgerBlue' }}>白银渡鸦</span>。
            <br />角鸦此刻担任坚果物流的<span style={{ color: 'DodgerBlue' }}>首席执行官兼外交大使</span>，希望能凭借强大的克里斯玛和一条三寸不烂之舌在十镇（让坚果物流和自己）为所欲为顺便夺还一切。
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />无论是<span style={{ color: 'DodgerBlue ' }}>炮友还是情人</span>，分手时双方一般都很愉快
            </li>
            <li className="about-activity">
              <ImPointRight /> 无底线无差别<span style={{ color: 'DodgerBlue' }}>鸟类</span>爱好者（鸟人除外）
            </li>
            <li className="about-activity">
              <ImPointRight /> 我的秘密是：生于无冬城，<span style={{ color: 'DodgerBlue' }}>？？？</span>
            </li>
          </ul>

          <p style={{ color: "DodgerBlue" }}>
            “我衷心期待与你们共同见证的未来。”{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: 'DodgerBlue ' }}>纳撒尼尔·角鸦</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCardT;
