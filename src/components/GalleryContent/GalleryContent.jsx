import React from "react";
import "./GalleryContent.css";

const GalleryContent = ({ image }) => {
  return (
    <div className="galleryContent_Container">
      <div className="container-fluid">
        <a href="#">
          <img src={image} alt="Gallery Images" data-aos="zoom-in" />
        </a>
      </div>
    </div>
  );
};

export default GalleryContent;
