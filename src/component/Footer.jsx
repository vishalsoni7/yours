import React from "react";
import { footerData } from "../data"; // Importing footerData from external data file

import { IoIosCall, IoIosMail } from "react-icons/io";

// Functional component for the Footer section
function Footer() {
  return (
    // Footer container
    <footer>
      <div>
        {" "}
        {/* Heading */}
        <h3> About </h3>
        {/* Short description */}
        <p>
          Embark on your legal journey with us today, Contact us to discuss your
          requirements and let us help you in easing your legal voyage.
        </p>
        {/* Mapping over the footerData array and rendering list items */}
        <span>
          <IoIosCall /> +91-9468884241
        </span>
        <span>
          <IoIosMail />
        </span>
      </div>

      <div class="clipped-image-container">
        <img src="./YLS-logo.png" />
      </div>
    </footer>
  );
}

// Exporting the Footer component as the default export
export default Footer;

// {footerData?.map((about) => (
//   // Unordered list with a unique key for each item
//   <ul key={about?.id}>
//     {/* List item containing icon and content */}
//     <li>
//       {about?.icon} {about?.content}
//     </li>
//   </ul>
// ))}
