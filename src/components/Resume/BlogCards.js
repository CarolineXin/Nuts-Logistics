import React,{useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Row, Col } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { darken } from 'polished';

function BlogCards(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const descriptionToShow = isExpanded ? props.description : props.description.slice(0, 100) + '...';

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = (event) => {
    setIsHovered(true);
    event.target.style.backgroundColor = darken(0.1, props.color);
  };

  const handleMouseLeave = (event) => {
    setIsHovered(false);
    event.target.style.backgroundColor = props.color;
  };

  const buttonBackgroundColor = isHovered ? darken(0.1, props.color) : props.color;

  return (
    <Card className={`blog-card-view ${!isExpanded ? 'equal-height-card' : ''}`}>
      <Card.Body className="d-flex flex-column">
        <Row>
          <Col>
            <Card.Title style={{fontSize:"32px",color: props.color, padding: '30px' }}>
              {props.title}
            </Card.Title>
            <Card.Text className={`card-text ${isExpanded ? 'expanded' : 'collapsed'}`} style={{ textAlign: 'justify', whiteSpace: 'pre-line', letterSpacing: '3px' }}>
              {descriptionToShow}
            </Card.Text>
          </Col>
        </Row>
        <Row className="mt-auto">
          <Col>
            <Button
              onClick={toggleExpand}
              className="expand-button"
              style={{
                width: '100%',
                backgroundColor: buttonBackgroundColor,
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isExpanded ? '收起' : '展开'}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
  
  
}
export default BlogCards;
