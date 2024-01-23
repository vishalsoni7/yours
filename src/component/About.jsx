import React from "react";

function About() {
  return (
    <div className="about-parent-div">
      <div>
        <img src="about.png" alt="about-library" />
      </div>

      <div>
        {" "}
        <h1>
          WE ARE <br /> HERE TO EASE <br /> YOUR LEGAL VOYAGE.
        </h1>{" "}
        <p> Your one-stop destination for comprehensive Legal Services. </p>
        <p>
          With over 4+ years of hands-on experience, <br /> We have had the
          privilege of assisting 1400+ students, <br />
          academicians, and professionals from the law domain around <br />
          the whole of India. We pride ourselves on delivering high-quality work
          and customised solutions that meet the unique needs of each of our
          clients.{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
