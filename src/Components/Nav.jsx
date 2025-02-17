// import { useState } from "react";
import "./Nav.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

function Nav() {
  return (
    <div className="">
      <div className="flex-container-nav1 hiddenonmobile">
        <div className="nav-item-nav1">
          <FaPhone className="iconsz" /> +1 718-999-3939
        </div>
        <div className="nav-item-nav1">
          <FaMapMarker className="iconsz" /> 514 S. Magnolia St. Orlando, FL
          32806
        </div>
        <div className="nav-item-nav1">
          <a href="http://Instagram.com/that.laughter" target="blank">
            <FaInstagram className="iconsz" />
          </a>
          <a href="https://wa.link/yxwwka" target="blank">
            <FaWhatsapp className="iconsz" />
          </a>
          <a href="#" target="blank">
            <FaLinkedin className="iconsz" />
          </a>
          <a href="#" target="blank">
            <FaFacebookSquare className="iconsz" />
          </a>
        </div>
      </div>
      <div className="nav2">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <img
              className="nav-img"
              id="nav"
              src="https://livedemo00.template-help.com/wt_51689/images/logo-198x66.png"
            ></img>
            <button
              className="navbar-toggler-light hiddenonlap"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#project">
                    Typography
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
