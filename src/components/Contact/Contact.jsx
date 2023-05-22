import React, { useState } from "react";
import axios from "axios";
import MessageSent from "./MessageSent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Helmet from "react-helmet";
// import { API_URL } from "../../config";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);

    try {
      // send form data to server using axios
      const result = await axios.post(`${process.env.API_URL}/contact`, {
        name,
        email,
        message,
      });
      console.log(result);

      // clear form inputs
      setName("");
      setEmail("");
      setMessage("");

      setIsSent(true);
    } catch (error) {
      console.log(error);
      throw error;
    }

    setIsSending(false);
  };

  return (
    <section className="contact" id="contact">
      <Helmet>
        <title>Contact - Fred's Portfolio</title>
        <meta
          name="description"
          content="Get in touch with me - JavaScript engineer (Frontend React, backend Node.js Express) and software developer. Check out my portfolio projects."
        />
        <meta
          name="keywords"
          content="software developer, software engineer, React, JavaScript, Node, Express, MERN, MongoDB, SQL"
        />
        <meta name="author" content="Fred Postles" />
        <link rel="canonical" href="https://your-portfolio.com/about" />
      </Helmet>
      <h2 className="section__heading">Contact Me</h2>
      {isSent ? (
        <MessageSent />
      ) : (
        <>
          <div className="contact__info__container">
            <div>
              <p>
                If you have any inquiries or collaboration opportunities, feel
                free to reach out to me through the contact form below.
              </p>
            </div>
            <div className="contact__links">
              <p>
                Alternatively, you can{" "}
                <a href="mailto:contact@fredpostles.com" title="Email me">
                  <span className="accent">email me</span>
                </a>{" "}
                directly, get in touch on{" "}
                <a
                  href="https://www.linkedin.com/in/fred-postles-192720198/"
                  title="LinkedIn"
                >
                  <span className="accent">LinkedIn</span>
                </a>{" "}
                or check out my{" "}
                <a
                  href="/assets/files/Fred_Postles_Software_Engineer_CV.pdf"
                  download
                  title="CV"
                >
                  <span className="accent">resume</span>
                </a>
                .
              </p>
            </div>
            <div className="contact__social">
              <div className="email__link">
                <a href="mailto:contact@fredpostles.com" title="Email me">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </a>
              </div>
              <div className="linkedin__link">
                <a
                  href="https://www.linkedin.com/in/fred-postles-192720198/"
                  title="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
              </div>
              <div className="cv__link">
                <a
                  href="/assets/files/Fred_Postles_Software_Engineer_CV.pdf"
                  download
                  title="CV"
                  // className="icon"
                >
                  CV
                </a>
              </div>
            </div>
          </div>
          <div className="form__container">
            <form
              onSubmit={handleSubmit}
              name="contactForm"
              data-netlify="true"
            >
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                placeholder="Enter your message"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button type="submit" className="submitBtn" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </>
      )}
    </section>
  );
};

export default Contact;
