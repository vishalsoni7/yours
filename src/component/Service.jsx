import React from "react";
import { serviceData } from "../data";

const Service = () => {
  return (
    <>
      {" "}
      <h1> OUR SWERVICES </h1>
      <div className="service-parent-div">
        {serviceData?.map((item) => (
          <div className="service-card" key={item?.id}>
            <img
              src={item?.image}
              alt="service images"
              className="service-img"
            />
            <p>{item?.content}</p>
          </div>
        ))}
      </div>{" "}
    </>
  );
};

export default Service;
