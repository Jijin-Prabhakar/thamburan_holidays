import React from "react";
import { Element } from "react-scroll";
import GalleryContent from "../GalleryContent/GalleryContent";
import "./GalleryContainer.css";

// Images
import card from "../../assets/visiting_card.jpg";
import logo from "../../assets/thamburan1.jpg";
import kerala from "../../assets/kerala_2021.jpg";
import image_2 from "../../assets/image 2.jpg";
import image_1 from "../../assets/image 1.jpg";
import image_6 from "../../assets/image 6.jpg";
import image_7 from "../../assets/image 7.jpg";
import image_10 from "../../assets/image 10.jpg";
import image_12 from "../../assets/image 12.jpg";
import image_13 from "../../assets/image 13.jpg";
import image_14 from "../../assets/image 14.jpg";
import image_16 from "../../assets/image 16.jpg";

const GalleryContainer = () => {
  const gallery = [
    {
      img: kerala,
    },
    {
      img: logo,
    },
    {
      img: card,
    },
    {
      img: image_2,
    },
    {
      img: image_1,
    },
    {
      img: image_6,
    },
    {
      img: image_7,
    },
    {
      img: image_16,
    },
    {
      img: image_10,
    },
    {
      img: image_12,
    },
    {
      img: image_13,
    },
    {
      img: image_14,
    },
  ];

  return (
    <Element className="galleryContainer" id="gallery">
      <h1 data-aos="zoom-in">Gallery</h1>
      <div className="galleryContainer_content" data-aos="fade-up">
        {gallery.map((items, index) => {
          return <GalleryContent key={index} image={items.img} />;
        })}
      </div>
    </Element>
  );
};

export default GalleryContainer;
