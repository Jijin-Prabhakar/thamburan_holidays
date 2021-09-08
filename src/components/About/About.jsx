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
              Travel Tours is the flagship leisure travel brand of FCTG
              Australia, in India. Known for its range of customized travel
              offerings, Travel Tours promises 'unbeatable' services both in
              pricing and quality.
              <br />
              <br />
              Currently, there are over 25 Travel Tours stores across all
              leading cities in India Delhi-NCR, Mumbai, Pune, Ahmedabad,
              Chandigarh, Bangalore, Hyderabad, Cochin, Chennai and Indore among
              other cities.
              <br />
              <br />
              Travel Tours has been formed by bringing together the erstwhile
              Travel Tours, a strong brand in South India which has been in
              existence since 1977 and Flight Shop, well-known in North and West
              India.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
