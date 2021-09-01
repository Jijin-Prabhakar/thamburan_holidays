import React from "react";
import "./SliderContainer.css";

const SliderContainer = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner p-2">
          <div className="carousel-item text-center active">
            <h5>
              “The world is a book and those who do not travel read only one
              page.”
            </h5>
            <p>~ Saint Augustine</p>
          </div>
          <div className="carousel-item text-center">
            <h5>“Life is either a daring adventure or nothing at all”</h5>
            <p>~ Helen Keller</p>
          </div>
          <div className="carousel-item text-center">
            <h5>
              “Traveling – it leaves you speechless, then turns you into a
              storyteller.”
            </h5>
            <p>~ Ibn Battuta</p>
          </div>
          <div className="carousel-item text-center">
            <h5>
              “Stop worrying about the potholes in the road and enjoy the
              journey”
            </h5>
            <p>~ Babs Hoffman</p>
          </div>
          <div className="carousel-item text-center">
            <h5>“Jobs fill your pocket but adventures fill your soul.”</h5>
            <p>~ Jamie Lyn Beatty</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderContainer;
