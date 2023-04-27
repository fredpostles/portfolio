import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        ".upArrow",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "bounce.out" }
      );
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`upArrow ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon
        icon={faArrowAltCircleUp}
        className="icon"
        title="Back to top"
      />
    </button>
  );
};

export default ScrollToTopButton;
