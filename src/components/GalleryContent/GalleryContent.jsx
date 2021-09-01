import React from "react";
import "./GalleryContent.css";

const GalleryContent = ({ image }) => {
  return (
    <div className="galleryContent_Container">
      <a href="#">
        <img src={image} alt="Gallery Images" />
      </a>
    </div>
  );
};

export default GalleryContent;
