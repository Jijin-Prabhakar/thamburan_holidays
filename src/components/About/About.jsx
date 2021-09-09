import React from "react";
import { Element } from "react-scroll";
import "./About.css";
import thamburanHolidays from "../../assets/thamburan2.jpg";

const About = () => {
  return (
    <Element id="about" className="about_container">
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-center mb-5">Know us</h1>
          <div className="col-md-6 mb-4">
            <img src={thamburanHolidays} alt="about" className="about_image" />
          </div>
          <div className="col-md-6 mb-4 about_description">
            <p>
              We, Thamburan Holidays situated at Palakkad, Kerala, India are a
              one stop shop for all the travel needs ranging from domestic to
              international tours. We understand how important your holiday is
              to you so we put all our efforts in making your trip memorable. We
              believe your holiday should truly be an unforgettable experience,
              from making your first enquiry until you return home from your
              tour.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
