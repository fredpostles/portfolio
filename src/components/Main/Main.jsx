import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import ScrollToTopButton from "../ScrollToTopBtn/ScrollToTopButton";
import Helmet from "react-helmet";

const Main = () => {
  return (
    <main id="main" className="main">
      <Helmet>
        <title>Fred's Portfolio</title>
        <meta
          name="description"
          content="Learn more about me and my experience as a JavaScript engineer (Frontend React, backend Node.js Express) and software developer. Take a look at my portfolio projects."
        />
        <meta
          name="keywords"
          content="software developer, software engineer, React, JavaScript, Node, Express, MERN, MongoDB, SQL"
        />
        <meta name="author" content="Fred Postles" />
        <link rel="canonical" href="https://your-portfolio.com/about" />
      </Helmet>
      <Projects />
      <About />
      <Contact />
      <ScrollToTopButton />
    </main>
  );
};

export default Main;
