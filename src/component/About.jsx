import React from "react";

// Functional component for the About section
function About() {
  return (
    // Parent container with a specified class
    <div className="about-parent-div">
      {/* Image container */}
      <div>
        {/* Image element with alt text */}
        <img src="about.png" alt="about-library" />
      </div>

      {/* Text content container */}
      <div>
        {/* Heading */}
        <h1>
          WE ARE <br /> HERE TO EASE <br /> YOUR LEGAL VOYAGE.
        </h1>
        {/* Short description */}
        <p> Your one-stop destination for comprehensive Legal Services. </p>
        {/* Detailed description */}
        <p>
          With over 5+ years of hands-on experience, <br /> We have had the
          privilege of assisting 2600+ students, <br />
          academicians, and professionals from the law domain around <br />
          the whole of India. We pride ourselves on delivering high-quality work
          and customised solutions that meet the unique needs of each of our
          clients.
        </p>
      </div>
    </div>
  );
}

// Exporting the About component as the default export
export default About;
