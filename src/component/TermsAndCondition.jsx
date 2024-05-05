import React from "react";
import { termsAndCondition } from "../data"; // Importing termsAndCondition from external data file

// Functional component for the Terms and Conditions section
function TermsAndCondition() {
  return (
    // Container for terms and conditions
    <div className="terms">
      {/* Heading */}
      <h1> TERMS & CONDITIONS </h1>

      {/* Introduction */}
      <h4>
        All the Terms and Conditions must be read and followed before availing
        for any of our service(s). All the client(s) approaching us are liable
        to follow the rules for the convenience of both the parties. These Terms
        and Conditions govern the use in relation to the service(s) availed by
        the Client(s) from Yours Legal Samaritan ["Service(s) Provider"].
      </h4>

      {/* Mapping over the termsAndCondition array and rendering each item */}
      <div>
        {termsAndCondition?.map((item) => (
          <div className="list-div" key={item?.id}>
            {/* Ordered list with the title */}
            <ol style={{ listStyle: "none" }}>
              <li>
                {item.id} {item?.title}
              </li>
            </ol>

            {/* Unordered list with descriptions */}
            <ul>
              {item?.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exporting the TermsAndCondition component as the default export
export default TermsAndCondition;
