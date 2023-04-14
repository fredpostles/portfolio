import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
// import Slider from "../Slider/Slider";

const Main = () => {
  return (
    <main id="main" className="main">
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
