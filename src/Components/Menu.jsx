// import { useState } from "react";
import "./Menu.css";
import {
  FaCoffee,
  FaFish,
  FaHamburger,
  FaIceCream,
  FaLeaf,
  FaPizzaSlice,
} from "react-icons/fa";

function Menu() {
  return (
    <div className="menu">
      <h1 className="text-center title">OUR MENU</h1>
      <div className="flex-container">
        <div className="flex-item5">
          <div className="image-text-container">
            <img
              src="https://livedemo00.template-help.com/wt_51689/images/menu-1-370x278.jpg"
              className="img-fluid sub-img"
              alt="Image"
            ></img>
            <div className="boxb"></div>
            <div className="text-overlay">
              <div className="icon">
                <FaLeaf className="iconsmenu" />
              </div>
              <p>SALADS</p>
            </div>
          </div>
        </div>
        <div className="flex-item5">
          <div className="image-text-container">
            <img
              src="https://livedemo00.template-help.com/wt_51689/images/menu-2-370x278.jpg"
              className="img-fluid sub-img"
              alt="Image"
            ></img>
            <div className="boxb"></div>
            <div className="text-overlay">
              <div className="icon">
                <FaPizzaSlice className="iconsmenu" />
              </div>
              <p>PIZZAS</p>
            </div>
          </div>
        </div>
        <div className="flex-item5">
          <div className="image-text-container">
            <img
              src="https://livedemo00.template-help.com/wt_51689/images/menu-3-370x278.jpg"
              className="img-fluid sub-img"
              alt="Image"
            ></img>
            <div className="boxb"></div>
            <div className="text-overlay">
              <div className="icon">
                <FaHamburger className="iconsmenu" />
              </div>
              <p>BURGERS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-item5">
          <div className="image-text-container">
            <img
              src="https://livedemo00.template-help.com/wt_51689/images/menu-4-370x278.jpg"
              className="img-fluid sub-img"
              alt="Image"
            ></img>
            <div className="boxb"></div>
            <div className="text-overlay">
              <div className="icon">
                <FaIceCream className="iconsmenu" />
              </div>
              <p>DESERTS</p>
            </div>
          </div>
        </div>
        <div className="flex-item5">
          <div className="image-text-container">
            <img
              src="https://livedemo00.template-help.com/wt_51689/images/menu-5-370x278.jpg"
              className="img-fluid sub-img"
              alt="Image"
            ></img>
            <div className="boxb"></div>
            <div className="text-overlay">
              <div className="icon">
                <FaCoffee className="iconsmenu" />
              </div>
              <p>DRINKS</p>
            </div>
          </div>
        </div>
        <div className="flex-item5">
          <div className="image-text-container">
            <img
              src="https://livedemo00.template-help.com/wt_51689/images/menu-6-370x278.jpg"
              className="img-fluid sub-img"
              alt="Image"
            ></img>
            <div className="boxb"></div>
            <div className="text-overlay">
              <div className="icon">
                <FaFish className="iconsmenu" />
              </div>
              <p>SEA FOOD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
