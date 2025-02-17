// import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import Card from "./Components/Card";
import Card2 from "./Components/Card2";
import Reserve from "./Components/Reserve";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="b2top">
        <a href="#nav">^</a>
      </div>
      <Nav />
      <Menu />
      <Card />
      <Card2 />
      <Reserve />
      <Footer />
    </div>
  );
}

export default App;
