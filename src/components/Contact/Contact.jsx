import React, { useState } from "react";
import axios from "axios";
import MessageSent from "./MessageSent";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const API_URL = "http://localhost:5000";

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    setIsSending(true);

    try {
      // send form data to server using axios
      await axios.post(`${API_URL}/contact`, { name, email, message });

      // clear form inputs
      setName("");
      setEmail("");
      setMessage("");

      setIsSent(true);
    } catch (error) {
      console.log(error);
    }

    setIsSending(false);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section__heading">Contact Me</h2>
      {isSent ? (
        <MessageSent />
      ) : (
        <>
          <div className="contact__info__container">
            <p>
              If you have any inquiries or collaboration opportunities, feel
              free to reach out to me through the contact form below.
            </p>
          </div>
          <div className="form__container">
            <form onSubmit={handleSubmit}>
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
