import "./Pizzacarousel.css";
function Pizzacarousel() {
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
            <h5 className="caroh5">
              Quality <br></br> ingredient
            </h5>
            <p className="carop" data-aos="fade-right" data-aos-duration="1000">
              We use only the best ingredients to make<br></br> one-of-a-kind
              pizzas for our customers.
            </p>
            <a className=" btn btn-warning caroa " href="#">
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
            <p className="carop" data-aos="fade-right" data-aos-duration="1000">
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden ">Previous</span>
      </button>
      <button
        className="carousel-control-next dis"
        type="button"
        data-bs-target="#simpleCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Pizzacarousel;
