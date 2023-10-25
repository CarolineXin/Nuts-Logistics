import React from "react";
import BlogCards from "./BlogCards";
import info from "./blogs/document_info.json";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function createBlogCards(props) {
  const blogCardsArray = info.map((file) => (
    <Col key={file.id} md={6}>
      <BlogCards color={file.color} title={file.title} description={file.content} />
    </Col>
  ));

  return (
    <Container fluid className="blog-card-columns">
      <Row>
        {blogCardsArray}
      </Row>
    </Container>
  );
}

export default createBlogCards;