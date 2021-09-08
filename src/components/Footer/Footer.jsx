import React from "react";
import { Element } from "react-scroll";
import "./Footer.css";
import thamburan from "../../assets/thamburan1.jpg";

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer className="text-center text-lg-start bg-dark text-muted footerContainer pt-3">
        <section className="mb-0">
          <div className="container text-center text-md-start p-2">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 d-flex mx-auto thamburan_footer_head">
                <img
                  src={thamburan}
                  alt="thamburan"
                  className="thamburan_footer_logo"
                />
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-4">
                <h6 className="text-uppercase fw-bold mb-4">SERVICES</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Tour Packages
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Rent Vehicles
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Taxi Services
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Other Services
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-4">
                <h6 className="text-uppercase fw-bold mb-4">PACKAGES</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Indian Tour Packages
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Abroad Tour Packages
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Honeymoon Packages
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Kerala Special Tour Packages
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Palakkad, Kerala, India.
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  &nbsp;thamburanholidays@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 91 9847519710
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 91 9846069563
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="d-flex justify-content-center justify-content-lg-center p-3 border-bottom">
          <div>
            <a href="https://www.facebook.com/" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.google.com/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="https://www.instagram.com/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>
        <div
          className="text-center thamburan_link p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright :
          <a className="text-reset fw-bold" href="#">
            &nbsp;www.thamburanholidays.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
