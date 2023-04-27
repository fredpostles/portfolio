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
      <div className="about__wrapper">
        <div className="about__content__wrapper">
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
              <span className="accent">software engineer</span> based in London.
              I'm a lifelong <span className="accent">problem-solver</span>{" "}
              turned <span className="accent">programmer</span>.
            </h2>
            <p>
              I draw on my{" "}
              <span className="accent">multidisciplinary background</span> to
              approach technical challenges in creative ways.
            </p>

            <p>
              My excellent <span className="accent">communication</span> and{" "}
              <span className="accent">collaboration</span> skills, enable me to{" "}
              <span className="accent">work effectively</span> in a team and my{" "}
              <span className="accent">ability to adapt</span> to different
              contexts makes me an asset in any environment.
            </p>
            <p>
              <span className="accent">When I'm not coding</span>, you might
              find me at a gallery or out hiking. Or I could be out on my bike
              or enjoying a coffee. Sometimes I might even be off{" "}
              <span className="accent">travelling and exploring</span>.
            </p>
          </div>
        </div>
        <div id="skills" className="skills">
          <h2 className="section__heading">Skills</h2>
          <div className="skills__inner__container">
            <div className="skillsList">
              {skills.map((element, index) => {
                return (
                  <div key={index} className="skill">
                    {element}
                  </div>
                );
              })}
            </div>
            <div className="skillsInfo">
              <p>
                You could say my journey to{" "}
                <span class="accent">software engineering</span> began with
                problem-solving experiences like{" "}
                <span className="accent">learning to solve a Rubik's cube</span>{" "}
                by memorizing algorithms from a YouTube video,{" "}
                <span className="accent">teaching myself</span> how to use video
                editing software or{" "}
                <span className="accent">learning to tweak HTML and CSS</span>{" "}
                on my Tumblr blog.
              </p>

              <p>
                My <span className="accent">interest was reignited</span> as
                lockdown struck the UK and the museum I worked at closed. I used
                this time to complete several{" "}
                <span className="accent">online courses</span> covering the
                basics of <span className="accent">web development</span> and an
                introductory Python course from Datacamp, discovering my{" "}
                <span className="accent">
                  passion for programming and coding
                </span>
                .
              </p>

              <p>
                Later, while working in documentary film distribution, I decided
                to make the switch to the field of
                <span className="accent"> software engineering</span>, with help
                from
                <span className="accent">
                  <a href="https://www.thejump.tech/part-time-software-engineering-course/">
                    {" "}
                    The Jump Digital's Full-Stack Engineering course
                  </a>
                </span>
                , and I am excited about using my natural technical,
                problem-solving and communication abilities in this field.
              </p>

              {/* <p>
                I am an adaptable, creative and diligent individual with
                industry experience in various fields including charity, museums
                and galleries, and film distribution to broadcast and digital.
              </p>
              <p>
                My multidisciplinary background in visual anthropology and
                history, alongside my experience working across various sectors
                highlights my adaptability and showcases my problem-solving and
                critical thinking abilities, as well as communication and
                collaboration skills.
              </p>
              <p>
                I have a drive for improvement and a strong ability to learn and
                pick up new skills, as evidenced by my transition from visual
                anthropology to software engineering. As a software engineer,
                these skills can be valuable in adapting to new technologies,
                troubleshooting issues, and finding innovative solutions to
                complex problems.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
