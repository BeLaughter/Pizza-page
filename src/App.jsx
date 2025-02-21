// import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
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
  return (
    <div>
      <div className="b2top">
        <a href="#nav">^</a>
      </div>
      <Nav />
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
