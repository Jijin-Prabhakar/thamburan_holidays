import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark header_container fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            THAMBU<span>RAN</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mx-5 justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2  mb-lg-0 ">
              <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Packages
                </a>
                <ul
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item text-info" href="#">
                      South India Packages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-info" href="#">
                      North India Packages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-info" href="#">
                      Abroad Packages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-info" href="#">
                      Honeymoon Packages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-info" href="#">
                      Kerala Special Packages
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link active"
                  smooth={true}
                  duration={500}
                  aria-current="page"
                  to="gallery"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link"
                  smooth={true}
                  duration={500}
                  to="reviews"
                >
                  Reviews
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link"
                  smooth={true}
                  duration={500}
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
