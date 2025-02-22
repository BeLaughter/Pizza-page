import "./Pizzacarousel.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function Pizzacarousel() {
  // Initialize AOS
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="simpleCarousel"
      className="carousel slide caro-height"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item imgh active">
          <img
            src="https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_640.jpg"
            className="d-block w-100"
            alt="Image 1"
          ></img>
          <div className="boxy"></div>
          <div className="carousel-caption capcaro">
            <h5
              className="caroh5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Quality <br></br> ingredient
            </h5>
            <p
              className="carop"
              data-aos="zoom-out-left"
              data-aos-duration="1500"
            >
              We use only the best ingredients to make<br></br> one-of-a-kind
              pizzas for our customers.
            </p>
            <a
              className=" btn btn-warning caroa "
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              href="#"
            >
              View Our Menu
            </a>
          </div>
        </div>
        <div className="carousel-item imgh">
          <img
            src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_640.jpg"
            className="d-block w-100"
            alt="Image 2"
          ></img>
          <div className="boxy"></div>
          <div className="carousel-caption capcaro">
            <h5 className="caroh5">
              Perfect <br></br> pizza
            </h5>
            <p className="carop">
              Experience the taste of a perfect pizza at <br></br>PizzaHouse,
              one of the best restaurants!
            </p>
            <a className=" btn btn-warning caroa" href="#">
              View Our Menu
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Carousel Controls --> */}
      <button
        className="carousel-control-prev dis"
        type="button"
        data-bs-target="#simpleCarousel"
        data-bs-slide="prev"
      >
        <div className="flex">
          <div className="img-botton hiddenonmobile">
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_640.jpg"
              className="d-block w-100"
              alt="Image 2"
            ></img>
          </div>
          <div>
            <FaArrowLeft className="iconsmen" aria-hidden="true" />
            <span className="visually-hidden ">Previous</span>
          </div>
        </div>
      </button>
      <button
        className="carousel-control-next dis"
        type="button"
        data-bs-target="#simpleCarousel"
        data-bs-slide="next"
      >
        <div className="flex">
          <div>
            <FaArrowRight className="iconsmen" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </div>
          <div className="img-botton hiddenonmobile">
            <img
              src="https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_640.jpg"
              className="d-block w-100"
              alt="Image 1"
            ></img>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Pizzacarousel;
