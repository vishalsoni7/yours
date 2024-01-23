import React from "react";
import { footerData } from "../data";

function Footer() {
  return (
    <footer>
      <h3> About </h3>

      <p>
        Embark on your legal journey with us today, Contact us to discuss your
        requirements and let us help you in easing your legal voyage.
      </p>

      {footerData?.map((about) => (
        <ul key={about?.id}>
          <li>
            {about?.icon} {about?.content}
          </li>
        </ul>
      ))}
    </footer>
  );
}

export default Footer;
