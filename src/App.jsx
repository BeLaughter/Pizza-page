// import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Pizzacarousel from "./Components/Pizzacarousel";
import Menu from "./Components/Menu";
import Card from "./Components/Card";
import Card2 from "./Components/Card2";
import Reserve from "./Components/Reserve";
import Footer from "./Components/Footer";
import Pizzas from "./Components/Pizzas";
import Testi from "./Components/Testi";
import Service from "./Components/Service";
import Review from "./Components/Review";

function App() {
  window.addEventListener("scroll", function () {
    var btntop = document.querySelector(".b2top");
    var scrollThreshold = btntop.offsetTop + window.innerHeight / 2; // 100vh below  position

    if (window.scrollY > scrollThreshold) {
      btntop.classList.add("fixed-btn");
    } else {
      btntop.classList.remove("fixed-btn");
    }
  });

  return (
    <div>
      <div className="b2top">
        <a href="#nav">^</a>
      </div>
      <Nav />
      <Pizzacarousel />
      <Menu />
      <Card />
      <Pizzas />
      <Card2 />
      <Testi />
      <Reserve />
      <Service />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
