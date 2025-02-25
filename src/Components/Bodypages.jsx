import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Bodypages(props) {
  // Initialize AOS
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bodypages image-text-contain">
      <img
        src="https://cdn.pixabay.com/photo/2022/06/04/03/41/pizza-7241179_640.jpg"
        alt="pic"
        className=" w-100  pages-img"
      ></img>
      <div className="boxb"></div>
      <div className="text-overlay">
        <h1 className="title" data-aos="fade-right" data-aos-duration="2500">
          {props.h1}
        </h1>
      </div>
    </div>
  );
}

export default Bodypages;
