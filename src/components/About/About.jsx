import React from "react";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node.js",
    "SQL",
    "NoSQL",
    "GraphQL",
    "SASS/SCSS",
    "SPAs",
    "Bootstrap",
    "APIs",
    "REST",
    "Git",
    "Testing",
    "TDD",
    "TypeScript",
    "Communication",
    "Attention to detail",
    "Adaptability",
    "Adobe Premiere Pro",
    "Adobe Photoshop",
    "Adobe Audition",
  ];

  return (
    <section id="about" className="about">
      <h1 className="section__heading">About Me</h1>
      <div className="image__container">
        <img
          src="/assets/images/fp-profile-pic.png"
          alt="Photograph of Author"
          className="about__headshot"
        />
      </div>
      <div className="bio">
        <h2 className="sub-heading">
          I'm Fred, an adaptable and inquisitive{" "}
          <span className="accent">software engineer</span> based in London. I'm
          a lifelong <span className="accent">problem-solver</span> turned{" "}
          <span className="accent">programmer</span>.
        </h2>
        <p>
          I draw on my{" "}
          <span className="accent">multidisciplinary background</span> to
          approach technical challenges in creative ways.
        </p>
        {/* <p> From studies in history and visual anthropology, to work experience
            across various sectors, including local government, charity, museums
            and galleries, and film distribution. </p> */}
        <p>
          My excellent <span className="accent">communication</span> and{" "}
          <span className="accent">collaboration</span> skills, enable me to{" "}
          <span className="accent">work effectively</span> in a team and my{" "}
          <span className="accent">ability to adapt</span> to different contexts
          makes me an asset in any environment.
        </p>
        <p>
          <span className="accent">When I'm not coding</span>, you might find me
          at a gallery or out hiking. Or I could be out on my bike or enjoying a
          coffee. Sometimes I might even be off{" "}
          <span className="accent">travelling and exploring</span>.
        </p>
      </div>
      <div id="skills" className="skills">
        <h2 className="section__heading">Skills</h2>
        <div className="skillsList">
          {skills.map((element, index) => {
            return (
              <div key={index} className="skill">
                {element}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
