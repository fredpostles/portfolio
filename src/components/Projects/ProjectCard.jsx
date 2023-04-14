import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project__card">
      <a href={project.demoLink}>
        <div className="project__image">
          <img
            src={`assets/images/projects/${project.image}`}
            alt={project.title}
          />
        </div>
      </a>
      <div className="project__details">
        <a href={project.demoLink}>
          <h2 className="project__title">{project.title}</h2>
        </a>
        <p className="project__description">{project.description}</p>
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
            <a href={project.gitHubLinkFront}>GitHub - Front</a>
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
