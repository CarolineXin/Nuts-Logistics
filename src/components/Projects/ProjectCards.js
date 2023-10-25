import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";

import { AiOutlineDownload } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.link && ( // 仅当 link 存在时渲染 Row 元素
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={props.link}
              target="_blank"
              style={{
              maxWidth: "250px",
              backgroundColor: "purple",
              transition: "background-color 0.3s",
              ":hover": {
                backgroundColor: "6d20c5d7",
              }
            }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        )}
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
{/* 
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
