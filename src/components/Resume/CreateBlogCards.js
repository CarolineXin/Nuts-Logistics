import React from "react";
import BlogCards from "./BlogCards";
import info from "./blogs/document_info.json";

function createBlogCards(props){
  
  const blogCardsArray = info.map((file) => (
    <BlogCards key={file.id} color ={file.color} title={file.title} description={file.content} />
  ));

  const columns = [[], []]; // 两列

  blogCardsArray.forEach((card, index) => {
    columns[index % 2].push(card);
  });

  return (
    <div className="blog-card-columns">
      <div className="blog-column">{columns[0]}</div>
      <div className="blog-column">{columns[1]}</div>
    </div>
  );
}

export default createBlogCards;