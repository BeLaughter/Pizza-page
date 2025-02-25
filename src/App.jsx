import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Typo from "./Pages/Typo";

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", function () {
    let btntop = document.querySelector(".b2top");
    let scrollThreshold = btntop.offsetTop + window.innerHeight / 2; // 100vh below  position

    if (window.scrollY > scrollThreshold) {
      btntop.classList.add("display-btn");
    } else {
      btntop.classList.remove("display-btn");
    }
  });
  return (
    <div>
      <div className="b2top">
        <a href="#totop" onClick={scrollToTop}>
          ^
        </a>
      </div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/typo" element={<Typo />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default App;
