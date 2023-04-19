import React, { useRef } from "react";
import Tooltip from "../Tooltip/Tooltip";

const ProjectCard = ({ project }) => {
  return (
    <div className="project__card">
      <div className="project__image">
        <a href={project.demoLink}>
          <img
            src={`assets/images/projects/${project.image}`}
            alt={project.title}
          />
        </a>
      </div>
      <div className="project__details">
        <a href={project.demoLink}>
          <h2 className="project__title">{project.title}</h2>
        </a>
        <p className="project__description">{project.description}</p>
        <div className="project__techs__list">
          {project.techs.map((tech, index) => {
            return (
              <div className="tech icons" key={index}>
                <Tooltip content={tech}>
                  <img
                    src={`assets/icons/techs/${tech}.svg`}
                    alt={tech}
                    title={tech}
                  />
                </Tooltip>
              </div>
            );
          })}
        </div>
        <div className="project__links">
          <a
            href={project.demoLink}
            alt={project.title}
            title={project.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          {project?.gitHubLinkFront ? (
            <a href={project.gitHubLinkFront}>
              {project.gitHubLinkBack ? "GitHub - Front" : "GitHub"}
            </a>
          ) : null}
          {project?.gitHubLinkBack ? (
            <a href={project.gitHubLinkBack}>GitHub - Back</a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
