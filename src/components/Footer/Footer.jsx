import React from "react";
import "animate.css";
import "./Footer.css";
import thamburan from "../../assets/thamburan1.jpg";

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer className="text-center text-lg-start bg-dark text-muted footerContainer">
        <section className="d-flex justify-content-center justify-content-lg-center mx-auto pt-3 pb-3 border-bottom">
          <div>
            <a href="https://www.facebook.com/" className="me-4 text-reset">
              <i className="fab fa-facebook-f" data-aos="slide-right"></i>
            </a>
            <a href="https://twitter.com/" className="me-4 text-reset ">
              <i className="fab fa-twitter" data-aos="slide-up"></i>
            </a>
            <a href="https://www.google.com/" className="me-4 text-reset">
              <i className="fab fa-google" data-aos="slide-up"></i>
            </a>
            <a href="https://www.instagram.com/" className="me-4 text-reset">
              <i className="fab fa-instagram" data-aos="slide-left"></i>
            </a>
          </div>
        </section>
        <section className="mb-3 pt-4">
          <div className="container text-center text-md-start">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto thamburan_footer_head">
                <img
                  src={thamburan}
                  alt="thamburan"
                  className="container-fluid thamburan_footer_logo"
                />
              </div>
              <div className=" col-md-2 col-lg-2 mx-auto col-xl-2 mt-4 thamburan_footer_services">
                <h6 className="text-uppercase fw-bold mb-4" data-aos="zoom-in">
                  SERVICES
                </h6>
                <p data-aos="slide-up">
                  <a href="#!" className="text-reset">
                    Tour Packages
                  </a>
                </p>
                <p data-aos="slide-up">
                  <a href="#!" className="text-reset">
                    Rent Vehicles
                  </a>
                </p>
                <p data-aos="slide-up">
                  <a href="#!" className="text-reset">
                    Taxi Services
                  </a>
                </p>
                <p data-aos="slide-up">
                  <a href="#!" className="text-reset">
                    Other Services
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-4 thamburan_footer_packages">
                <h6 className="text-uppercase fw-bold mb-4" data-aos="zoom-in">
                  PACKAGES
                </h6>
                <p data-aos="slide-up">
                  <a href="#!" className="text-reset">
                    Indian Tour Packages
                  </a>
                </p>
                <p data-aos="slide-up">
                  <a href="#!" className="text-reset">
                    Abroad Tour Packages
                  </a>
                </p>
                <p data-aos="slide-up">
                  <a href="#!" className="text-reset">
                    Honeymoon Packages
                  </a>
                </p>
                <p data-aos="slide-up">
                  <a href="#!" className="text-reset">
                    Kerala Special Tour Packages
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-4 thamburan_footer_contact">
                <h6
                  className="text-uppercase text-center fw-bold mb-4"
                  data-aos="zoom-in"
                >
                  Contact
                </h6>
                <div className="contact-section">
                  <div className="contact-section_1" data-aos="fade">
                    <p>
                      <i className="fas fa-home me-3"></i>
                    </p>
                    <p>
                      <i className="fas fa-envelope me-3"></i>
                    </p>
                    <p>
                      <i className="fas fa-phone me-3"></i>
                    </p>
                    <p>
                      <i className="fas fa-phone me-3"></i>
                    </p>
                  </div>
                  <div className="contact-section_2" data-aos="slide-up">
                    <p>Palakkad, Kerala, India.</p>
                    <p>thamburanholidays@gmail.com</p>
                    <p>+ 91 9847519710</p>
                    <p>+ 91 9846069563</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center thamburan_link p-2 border-top"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          ?? 2021 Copyright :
          <a className="text-reset fw-bold" href="#">
            &nbsp;www.thamburanholidays.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
