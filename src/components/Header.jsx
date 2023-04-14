import React from "react";
import { Link } from "react-scroll";

const Header = ({}) => {
  // Get a reference to the header element and calculate its height
  const headerRef = React.useRef(null);
  const headerHeight = headerRef.current ? headerRef.current.clientHeight : 0;

  return (
    <header ref={headerRef}>
      <nav>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} offset={-headerHeight}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-headerHeight}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-headerHeight}
            >
              Projects
            </Link>
          </li>
          <li>
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
    </header>
  );
};

export default Header;
