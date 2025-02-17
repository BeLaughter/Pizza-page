// import { useState } from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="boxb"></div>
      <div className="flex-container-card">
        <div className=" flex-item-card1"></div>
        <div className=" flex-item-card2">
          <h1>Best atmosphere</h1>
          <p>
            PizzaHouse is the place of the best <br></br>pizza and high-quality
            service.
          </p>
          <p className="flex-p">
            <div className="sm-line"></div>Ben Smith, Founder
          </p>
          <input type="submit" value="Subscribe" className="input-sub3" />
        </div>
      </div>
    </div>
  );
}

export default Card;
