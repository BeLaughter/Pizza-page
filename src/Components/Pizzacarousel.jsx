import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Pizzacarousel.css";

function Pizzacarousel() {
  // Image data
  const images = [
    {
      src: "https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_640.jpg",
      title: "Quality Ingredient",
      description:
        "We use only the best ingredients to make one-of-a-kind pizzas for our customers.",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_640.jpg",
      title: "Perfect Pizza",
      description:
        "Experience the taste of a perfect pizza at PizzaHouse, one of the best restaurants!",
    },
  ];

  // State to track current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="simpleCarousel"
      className="carousel slide caro-height"
      data-bs-ride="carousel"
    >
      {/* Carousel Items */}
      <div className="carousel-inner">
        {images.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={item.src}
              className="d-block w-100 imgh"
              alt={`Slide ${index + 1}`}
            />
            <div className="boxy"></div>
            <div className="carousel-caption capcaro">
              <h5 className="caroh5">{item.title}</h5>
              <p className="carop">{item.description}</p>
              <a className="btn caroa btn-warning" href="#">
                View Our Menu
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev dis"
        type="button"
        onClick={handlePrev}
      >
        <div className="flex">
          <div className="img-botton hiddenonmobile">
            <img
              src={
                images[(currentIndex - 1 + images.length) % images.length].src
              }
              className="d-block w-100"
              alt="Previous Slide"
            />
          </div>
          <div>
            <FaArrowLeft className="iconsmen" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </div>
        </div>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next dis"
        type="button"
        onClick={handleNext}
      >
        <div className="flex">
          <div>
            <FaArrowRight className="iconsmen" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </div>
          <div className="img-botton hiddenonmobile">
            <img
              src={images[(currentIndex + 1) % images.length].src}
              className="d-block w-100"
              alt="Next Slide"
            />
          </div>
        </div>
      </button>
    </div>
  );
}

export default Pizzacarousel;
