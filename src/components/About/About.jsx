import React from "react";
import { skills } from "../../data/skills";
import Helmet from "react-helmet";

const About = () => {
  return (
    <section id="about" className="about">
      <Helmet>
        <title>About - Fred's Portfolio</title>
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
              I've <span className="accent">always been drawn</span> to the
              intricate <span className="accent">puzzles of logic</span>, like
              cracking a Rubik's Cube, or solving that puzzle in the Christmas
              cracker. Growing up <span className="accent">bilingual</span>,
              I've also got firsthand experience of the{" "}
              <span className="accent">
                power of language and communication
              </span>
              .
            </p>
            <p>
              <span className="accent">
                Coding, to me, is the ultimate fusion of linguistic skill and
                analytical thinking — a creative means to address society's most
                pressing issues, like climate change, poverty, and social
                justice. It's this potential that interests and motivates me and
                that's why I strive to harness the power of code for a better
                world.{" "}
              </span>
            </p>
            <p>
              I am excited about using my natural technical, problem-solving and
              communication abilities in this field.
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
                My excellent <span className="accent">communication</span> and{" "}
                <span className="accent">collaboration</span> skills, enable me
                to <span className="accent">work effectively</span> in a team
                and my <span className="accent">ability to adapt</span> to
                different contexts makes me an asset in any environment.
              </p>
              <p>
                My background in{" "}
                <span className="accent">anthropology and history</span> has
                honed my <span className="accent">analytical abilities</span>,
                allowing me to approach problems with a{" "}
                <span className="accent">fresh perspective.</span> Filmmaking
                and editing experience not only showcases my{" "}
                <span className="accent"> technical abilities</span> but also
                underscores my
                <span className="accent"> visual aptitude.</span>
              </p>
              <p>
                I'm{" "}
                <span className="accent">passionate about pushing myself</span>{" "}
                to try new things, including the{" "}
                <span className="accent">latest tech trends</span>, embracing
                lifelong learning to keep my skills sharp.{" "}
                <span className="accent">
                  I'm always looking for new challenges and growth.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
