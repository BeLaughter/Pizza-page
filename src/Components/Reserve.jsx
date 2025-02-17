// import { useState } from "react";
import "./Reserve.css";
import { FaQuoteLeft } from "react-icons/fa";

function Reserve() {
  return (
    <div>
      <h1 className="text-center">Book your Table</h1>
      <div className="reserve">
        <div className="re-card">
          <div className="flex-container">
            <input type="text" placeholder="Name" required></input>
            <input type="text" placeholder="Phone Number" required></input>
            <input type="text" placeholder="Email" required></input>
          </div>

          <input
            type="text"
            placeholder="Comment"
            className="comment"
            required
          ></input>
          <div className="flex-container">
            <div>
              <input type="submit" value="Contact Us" className="input-sub3" />
            </div>
            <div className="flex">
              <FaQuoteLeft className="iconsz" />
              <p>
                Please reserve your table at <br></br>least 1 day in advance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
