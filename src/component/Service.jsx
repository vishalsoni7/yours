import React from "react";
import { serviceData } from "../data"; // Importing serviceData from external data file

// Functional component for the Service section
const Service = () => {
  return (
    <>
      {/* Heading */}
      <h1 className="header"> OUR SERVICES </h1>
      {/* Parent container for service cards */}
      <div className="service-parent-div">
        {/* Mapping over the serviceData array and rendering service cards */}
        {serviceData?.map((item) => (
          <div className="service-card" key={item?.id}>
            {/* Service image */}
            <img
              src={item?.image}
              alt="service images"
              className="service-img"
            />
            {/* Service content */}
            <p>{item?.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

// Exporting the Service component as the default export
export default Service;
