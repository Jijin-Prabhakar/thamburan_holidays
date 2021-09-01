import React from "react";
import Modal from "../Modal/Modal";
import SliderContainer from "../SliderContainer/SliderContainer";
import "./BannerContent.css";

const BannerContent = () => {
  return (
    <div className="bannerContent">
      <div className="bannerContent_container">
        <section className="p-4">
          <h1 className="p-2">
            THAMBU<span>RAN</span> HOLI<span>DAYS</span>
          </h1>
          <p>
            We are professional planners for your vacations, No matter where
            you’re going from, we take you there.
          </p>
          <p>Invest in unforgettable travel experiences..!</p>
        </section>
        <section>
          <SliderContainer />
        </section>
        <section>
          {/* <a href="#"> */}
          {/* <button className="bannerContent_getQuoteButton">GET QUOTE</button> */}
          <Modal />
          {/* </a> */}
        </section>
      </div>
    </div>
  );
};

export default BannerContent;
