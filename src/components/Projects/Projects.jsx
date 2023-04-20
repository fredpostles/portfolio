import React, { useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projectCardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".gs_reveal").forEach((elem) => {
      gsap.set(elem, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: elem,
        start: "top 50%",
        onEnter: () => animateFrom(elem, getClassList(elem)),
        // onEnterBack: () => animateFrom(elem, getClassList(elem), -1),
        // onLeave: () => gsap.set(elem, { autoAlpha: 0 }),
      });
    });
  }, []);

  function animateFrom(elem, classList, direction = 1) {
    let x = 0;
    let y = direction * 100;
    if (classList.includes("gs_reveal_fromLeft")) {
      x = -100;
    } else if (classList.includes("gs_reveal_fromRight")) {
      x = 100;
    }

    gsap.fromTo(
      elem,
      { x, y, autoAlpha: 0 },
      {
        x: 0,
        y: 0,
        autoAlpha: 1,
        duration: 0.25,
        ease: "expo",
        overwrite: "auto",
      }
    );
  }

  function getClassList(elem) {
    const classList = elem.classList;
    return Array.from(classList);
  }

  return (
    <section id="projects" className="projects">
      <h1 className="section__heading">Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          project={project}
          key={index}
          index={index}
          animateFrom={animateFrom}
          ref={projectCardRef}
        />
      ))}
    </section>
  );
};

export default Projects;
