import React from "react";
import { Element } from "react-scroll";
import GalleryContent from "../GalleryContent/GalleryContent";
import "./GalleryContainer.css";

const GalleryContainer = () => {
  const gallery = [
    {
      img: "https://images.pexels.com/photos/3930029/pexels-photo-3930029.jpeg",
    },
    {
      img: "https://images.pexels.com/photos/3930029/pexels-photo-3930029.jpeg",
    },
    {
      img: "https://images.pexels.com/photos/3930029/pexels-photo-3930029.jpeg",
    },
    {
      img: "https://images.pexels.com/photos/3930029/pexels-photo-3930029.jpeg",
    },
    {
      img: "https://images.pexels.com/photos/3930029/pexels-photo-3930029.jpeg",
    },
    {
      img: "https://images.pexels.com/photos/3930029/pexels-photo-3930029.jpeg",
    },
    {
      img: "https://images.pexels.com/photos/3930029/pexels-photo-3930029.jpeg",
    },
    {
      img: "https://images.pexels.com/photos/3930029/pexels-photo-3930029.jpeg",
    },
  ];

  return (
    <Element className="galleryContainer" id="gallery">
      <h1>Gallery</h1>
      <div className="galleryContainer_content">
        {gallery.map((items, index) => {
          return <GalleryContent key={index} image={items.img} />;
        })}
      </div>
    </Element>
  );
};

export default GalleryContainer;
