import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1 className="section__heading">Projects</h1>
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </section>
  );
};

export default Projects;
