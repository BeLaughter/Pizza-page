import "./Pizzas.css";
import { FaStar } from "react-icons/fa";

function Pcard(props) {
  return (
    <div className="pcard">
      <div className="pcard-img">
        <img src={props.img} alt="pizza" className="pcard-imgs" />
      </div>
      <div className="boxbt">
        <div className=" justify-content-center pcard-btn ">
          <div className="">
            <input type="submit" value="ADD TO CART" className="card-inputp" />
          </div>
          <div className="">
            <input type="submit" value="VIEW PRODUCT" className="card-inputp" />
          </div>
        </div>
      </div>
      <div className="pcard-info">
        <FaStar className="ico" />
        <FaStar className="ico" />
        <FaStar className="ico" />
        <FaStar className="ico" />
        <FaStar className="ico" />
      </div>
      <h3 className="text-center">{props.h3}</h3>
      <p className="text-center">{props.p}</p>
    </div>
  );
}

export default Pcard;
