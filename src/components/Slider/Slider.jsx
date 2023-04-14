import React from "react";
import { projects } from "../../projects";
import { getRandomIndex } from "../../utils";

const Slider = () => {
  const index = getRandomIndex(projects.length);

  return (
    <section id="slider">
      <div className="slider__image__container">
        <img
          src={`/assets/images/projects/${projects[index].image}`}
          alt={projects[index].alt}
          style={{ width: "100%", margin: "1rem 0 0 0", textAlign: "center" }}
        />
        <h1>{projects[index].title}</h1>
        <p>
          <a href={projects[index].demoLink}>View Project</a>
        </p>
      </div>
    </section>
  );
};

export default Slider;
