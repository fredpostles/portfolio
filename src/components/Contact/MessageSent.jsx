import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeCircleCheck,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import Main from "../Main/Main";

const MessageSent = () => {
  const messageRef = useRef(null);

  useEffect(() => {
    const messages = messageRef.current.querySelectorAll("div");
    gsap.set(messages, { y: 100, autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.fromTo(
      messages,
      { y: 100, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2 }
    );
  }, []);

  const handleRedirect = () => {
    gsap.to(messageRef.current, {
      duration: 0.8,
      y: -100,
      autoAlpha: 0,
      onComplete: () => {
        window.location.reload();
        window.scrollTo(0, 0);
      },
    });
  };

  return (
    <div className="message__sent__container" ref={messageRef}>
      <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="envelope" />
      <h1>Message sent!</h1>
      <div>
        <p>Thank you for getting in touch!</p>
      </div>
      <div className="dividing__line"></div>
      <div>
        <p>
          Your message has been received and I will respond as soon as possible.
        </p>
      </div>
      <div className="dividing__line"></div>
      <div>
        <p>
          In the meantime, feel free to explore the rest of my portfolio site
          and check out my other projects.
        </p>
      </div>
      <div className="explore">
        <h1>Explore</h1>
        <div>
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="arrow"
            onClick={handleRedirect}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageSent;
