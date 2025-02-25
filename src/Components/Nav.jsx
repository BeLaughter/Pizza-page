// import { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

function Nav() {
  //Event listener for addiing and removing fixed class to navbar
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".nav2");
    let sticky = navbar.offsetTop;

    if (window.scrollY > sticky) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  });
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
                <Link to="/" className="nav-link active" aria-current="page">
                  <li className="nav-item">Home</li>
                </Link>
                <Link to="/about" className="nav-link">
                  <li className="nav-item">About Us</li>
                </Link>
                <Link to="/typo" className="nav-link">
                  <li className="nav-item">Typography</li>
                </Link>
                <Link to="/contact" className="nav-link">
                  <li className="nav-item">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
