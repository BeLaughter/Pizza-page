import "./Service.css";
import { FaThumbsUp } from "react-icons/fa";
function Scard(props) {
  return (
    <div className="scard">
      <div className="row "></div>
      <div className="row">
        <h4 className="text-center">{props.h1}</h4>
      </div>
      <div className="row">
        <p className="text-center">{props.p}</p>
      </div>
    </div>
  );
}

export default Scard;
