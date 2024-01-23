import React from "react";
import { whyChooseUsData } from "../data"; // Importing whyChooseUsData from external data file

// Functional component for the Why Choose Us section
function WhyUs() {
  return (
    // Container for the Why Choose Us section
    <div>
      {/* Heading */}
      <h1 className="header">WHY CHOOSE US? </h1>

      {/* Container for why-us cards */}
      <div className="why-us">
        {/* Mapping over the whyChooseUsData array and rendering each item */}
        {whyChooseUsData?.map((item) => (
          <div className="why-us-card" key={item?.id}>
            {/* Subheading */}
            <h2> {item?.title} </h2>
            {/* Description */}
            <p> {item?.describe} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exporting the WhyUs component as the default export
export default WhyUs;
