import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Nav from "./Components/Nav";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Typo from "./Pages/Typo";
import Footer from "./Components/Footer";

function App() {
  // Initialize AOS
  useEffect(() => {
    Aos.init();
  }, []);
  // Function to scroll to top when button is clicked.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //add display class to btn when screen is scrolled to half vheight
  window.addEventListener("scroll", function () {
    let btntop = document.querySelector(".b2top");
    let scrollThreshold = btntop.offsetTop + window.innerHeight / 2; // 50vh below  position

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
      <Footer />
    </div>
  );
}
export default App;
