import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useScrollDirection } from "../hooks/index";

const Header = () => {
  // Get a reference to the header element and calculate its height
  const headerRef = React.useRef(null);
  const headerHeight = headerRef.current ? headerRef.current.clientHeight : 0;

  // hide/show nav on scroll
  const scrollDirection = useScrollDirection();

  return (
    <header
      ref={headerRef}
      className={scrollDirection === "down" ? "hide" : "show"}
    >
      <div className="header__wrapper">
        <div className="header__logo">
          <p>FRED POSTLES</p>
        </div>
        <nav>
          <ul>
            <li className="header__nav__link">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-headerHeight}
              >
                Projects
              </Link>
            </li>
            <li className="header__nav__link">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-headerHeight}
              >
                About
              </Link>
            </li>
            <li className="header__nav__link">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-headerHeight}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__links">
          <div className="cv__link">
            <a
              href="/assets/files/FrontendEngineer_JS_FP.pdf"
              download
              title="CV"
            >
              CV
            </a>
          </div>
          <div className="email__link">
            <a href="mailto:contact@fredpostles.com" title="Email me">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <div className="github__link">
            <a href="https://github.com/fredpostles/" title="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="linkedin__link">
            <a
              href="https://www.linkedin.com/in/fred-postles-192720198/"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
