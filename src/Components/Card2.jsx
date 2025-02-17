// import { useState } from "react";
import "./Card.css";

function Card2() {
  return (
    <div className="card2">
      {/* <div className="boxb"></div> */}
      <div className="flex-container-card">
        <div className=" flex-item-card1"></div>
        <div className=" flex-item-card2">
          <h1>-30% on all salads & drinks</h1>
          <p className="flex-p">
            <div className="sm-line"></div>Taste some of the best PizzaHouse
            salads!
          </p>
          <input type="submit" value="Contact Us" className="input-sub3" />
        </div>
      </div>
    </div>
  );
}

export default Card2;
