import React, { useState, useEffect } from "react";
import Tooltip from "../Tooltip/Tooltip";

const ProjectCard = React.forwardRef((props, ref) => {
  const { project, index, animateFrom } = props;
  const [imagePath, setImagePath] = useState("");

  // display project image to match current screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImagePath(project.image[0]);
      } else if (window.innerWidth < 1024) {
        setImagePath(project.image[1]);
      } else if (window.innerWidth < 1280) {
        setImagePath(project.image[2]);
      } else {
        setImagePath(project.image[3]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [project.image]);

  // set animation direction for GSAP based on index
  const animateDirection =
    index % 2 === 0 ? "gs_reveal_fromLeft" : "gs_reveal_fromRight";

  // set classes, including for GSAP
  const classList = ["project__card", "gs_reveal", animateDirection];

  // call GSAP animation
  animateFrom(project, classList);

  // get class names from image path
  const splitString = String(imagePath).split(".");

  const imageClass = splitString[0];

  return (
    <div className={classList.join(" ")} ref={ref}>
      <div className="project__image">
        <a href={project.demoLink}>
          <img
            src={`assets/images/projects/${imagePath}`}
            alt={project.title}
            className={imageClass}
          />
        </a>
      </div>
      <div className="project__details">
        <a href={project.demoLink}>
          <h2 className="project__title">{project.title}</h2>
        </a>
        <p className="project__description">{project.description}</p>
        <div className="project__techs__list">
          {project.techs?.map((tech, index) => {
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
});

export default ProjectCard;
