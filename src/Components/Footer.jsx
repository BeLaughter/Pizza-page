// import { useState } from "react";
import "./Footer.css";
import {
  FaPhone,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaFacebookSquare,
  FaMailBulk,
  FaThumbsUp,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="flex-container6">
        <div className="flex-item">
          <h1>What We Offer</h1>
          <div className="flex">
            <div>
              <ul>
                <li>Pizzas</li>
                <li>Burgers</li>
                <li>Salads</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Drinks</li>
                <li>Seafood</li>
                <li>Desserts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <h1>Information</h1>
          <div className="flex">
            <div>
              <ul>
                <li>FAQ</li>
                <li>Shop</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Drinks</li>
                <li>Seafood</li>
                <li>Desserts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <h1>Newsletter</h1>
          <p>Sign up today for the latest news and updates.</p>
          <input
            type="text"
            placeholder="Enter your E-mail"
            className="input-sub"
            required
          />
          <input type="submit" value="Subscribe" className="input-sub2" />
        </div>
      </div>
      <hr></hr>
      <div className="flex-container6">
        <div className="mid-foot">
          <img
            className="nav-img"
            id="nav"
            src="https://livedemo00.template-help.com/wt_51689/images/logo-198x66.png"
          ></img>
        </div>
        <div className="mid-foot">
          <p>
            <a href="http://Instagram.com/that.laughter" target="blank">
              <FaThumbsUp className="iconsz" />
            </a>
            9.4K
          </p>
        </div>
        <div className="mid-foot">
          <FaPhone className="iconsz" /> +1 718-999-3939
        </div>
        <div className="mid-foot">
          <p>
            <a href="http://Instagram.com/that.laughter" target="blank">
              <FaMailBulk className="iconsz" />
            </a>
            info@demolink.org
          </p>
        </div>
        <div className="mid-foot">
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
      <hr></hr>
      <div className="flex-container6">
        <p>514 S. Magnolia St. Orlando, FL 32806</p>
        <p>© 2025. All Rights Reserved. Design by BlackFire</p>
      </div>
    </div>
  );
}

export default Footer;
