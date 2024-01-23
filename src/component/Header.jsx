import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="header-name-logo">
        <div className="header-name-logo">
          <img src="YLS-logo.png" alt="YLS-logo" className="logo" />
          <h1> Yours Legal Samartian </h1>
        </div>

        <div className="social-icon">
          <FaLinkedin />
          <FaTelegram />
          <FaWhatsappSquare />
        </div>
      </div>
      <div>
        {" "}
        <img src="YLS-Banner.png" alt="YLS-Banner" className="banner-img" />
      </div>
    </>
  );
}

export default Header;
