import React from "react";

// Importing specific icons from react-icons library
import { FaWhatsappSquare, FaTelegram, FaLinkedin } from "react-icons/fa";

// Functional component for the Header section
function Header() {
  return (
    <>
      {/* Header container with name and logo */}
      <div className="header-name-logo">
        {/* Logo and name container */}
        <div className="header-name-logo">
          {/* Logo image */}
          <img src="YLS-logo.png" alt="YLS-logo" className="logo" />
          {/* Heading */}
          <h1> Yours Legal Samaritan </h1>
        </div>

        {/* Social media icons container */}
        <div className="social-icon">
          {/* LinkedIn icon with link */}
          <a
            href="https://www.linkedin.com/in/ayush-puri-0666a727a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          {/* Telegram icon with link */}
          <a
            href="https://telegram.me/+3p1hOxg7sTRlZTE1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
          {/* WhatsApp icon with link */}
          <a
            href="https://wa.me/+919468884241"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsappSquare />
          </a>
        </div>
      </div>

      {/* Banner image container */}
      <div>
        {/* Banner image */}
        <img src="YLS-Banner.png" alt="YLS-Banner" className="banner-img" />
      </div>
    </>
  );
}

// Exporting the Header component as the default export
export default Header;
