import React from "react";
import strings from "./Langstrings";

const Feedbackform = () => {
  return (
    <div id="feedbackForm">
      <h3>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe9UuRToGgMabKOWOGi7P83kwtG8QdlR9A59t_5BrgGXCQH1A/viewform?usp=sf_link"
          rel="noopener noreferrer"
          target="_blank"
        >
          {strings.feedBackText}
        </a>
      </h3>
    </div>
  );
};

export default Feedbackform;
