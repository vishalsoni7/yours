import React from "react";
import { whyChooseUsData } from "../data";

function WhyUs() {
  return (
    <div>
      <h1> WHY CHOOSE US? </h1>

      <div className="why-us">
        {whyChooseUsData?.map((item) => (
          <div className="why-us-card" key={item?.id}>
            <h2> {item?.title} </h2>
            <p> {item?.describe} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
