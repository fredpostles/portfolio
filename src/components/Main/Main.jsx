import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Main = () => {
  return (
    <main id="main" className="main">
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default Main;
