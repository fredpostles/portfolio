import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        <small>
          &copy; Fred Postles{" "}
          {new Date().getFullYear() === 2023
            ? 2023
            : 2023 - new Date().getFullYear()}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
