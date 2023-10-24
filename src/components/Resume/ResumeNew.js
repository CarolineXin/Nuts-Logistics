import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import BlogCards from "./BlogCards";
import TagSelector from "./TagSelector";
import CreateBlogCards from "./CreateBlogCards"; // 修正组件名
import CreateBlogCards2 from "./CreateBlogCards2"; // 修正组件名
import Paintings from "./Paintings"; // 修正组件名
import Records from "./Records"; // 修正组件名

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagChange = (option) => {
    setSelectedTag(option);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" style={{margin:"40px"}}>
        <Particle />
          <div className="row">
            <div className="col-md-4">
              {/* 这里放置标签选择器 */}
              <TagSelector onChange={handleTagChange}/>
            </div>
            </div>

            {selectedTag && selectedTag.value === "坚果茶水间" && (
                <CreateBlogCards />
            )}

            {selectedTag && selectedTag.value === "冰风谷秘闻" && (
                <CreateBlogCards2 />
            )}

            {selectedTag && selectedTag.value === "人员档案" && (
                <Records />
            )}

            {selectedTag && selectedTag.value === "坚果画报" && (
                <Paintings />
            )}
      </Container>
    </div>
  );
}

export default ResumeNew;
