import React from "react";
import { termsAndCondition } from "../data";

function TermsAndCondition() {
  return (
    <div className="terms">
      <h1> TERMS & CONDITIONS </h1>

      <h4>
        All the Terms and Conditions must be read and followed before availing
        for any of our service(s). All the client(s) approaching us are liable
        to follow the rules for the convenience of both the parties. These Terms
        and Conditions govern the use in relation to the service(s) availed by
        the Client(s) from Yours Legal Samaritan ["Service(s) Provider"].
      </h4>

      <div>
        {termsAndCondition?.map((item) => (
          <div className="list-div" key={item?.id}>
            <ol>
              <li> {item?.title}</li>
            </ol>

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

export default TermsAndCondition;
