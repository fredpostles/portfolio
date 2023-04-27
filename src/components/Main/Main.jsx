import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import ScrollToTopButton from "../ScrollToTopBtn/ScrollToTopButton";

const Main = () => {
  return (
    <main id="main" className="main">
      <Projects />
      <About />
      <Contact />
      <ScrollToTopButton />
    </main>
  );
};

export default Main;
