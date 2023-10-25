import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function BlogCards(props) {
  console.log(props.color);
  return (
    <Card className="blog-card-view">
      <Card.Body>
        <Card.Title style={{fontSize:"50px",color:props.color,padding:"30px"}}>{props.title}</Card.Title>
        <Card.Text className="card-text" style={{textAlign: "justify", whiteSpace:"pre-line",letterSpacing: "3px"}}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default BlogCards;
