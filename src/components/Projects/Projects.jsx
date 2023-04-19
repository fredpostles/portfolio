import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1 className="section__heading">Projects</h1>
      {projects.map((project, index) => {
        return <ProjectCard project={project} key={index} />;
      })}
    </section>
  );
};

export default Projects;
