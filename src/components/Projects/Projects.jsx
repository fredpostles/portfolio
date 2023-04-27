import React, { useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Helmet from "react-helmet";

const Projects = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".gs_reveal").forEach((elem) => {
      gsap.set(elem, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: elem,
        start: "top 50%",
        once: true,
        onLeaveBack: (self) => self.disable(),
        onEnter: () => animateFrom(elem, getClassList(elem)),
        anticipatePin: 1,
      });
    });
  }, []);

  function animateFrom(elem, classList, direction = 1) {
    let x = 0;
    let y = direction * 100;
    if (classList.includes("gs_reveal_fromLeft")) {
      x = -250;
    } else if (classList.includes("gs_reveal_fromRight")) {
      x = 250;
    }

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "circ" } });

    tl.fromTo(
      elem,
      { x, y, autoAlpha: 0 },
      {
        x: 0,
        y: 0,
        autoAlpha: 1,
        overwrite: "auto",
      }
    );

    return tl;
  }

  function getClassList(elem) {
    const classList = elem.classList;
    return Array.from(classList);
  }

  return (
    <section id="projects" className="projects">
      <Helmet>
        <title>Projects - Fred's Portfolio</title>
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
      <h1 className="section__heading">Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          project={project}
          key={index}
          index={index}
          animateFrom={animateFrom}
          ref={projectRef}
        />
      ))}
    </section>
  );
};

export default Projects;
