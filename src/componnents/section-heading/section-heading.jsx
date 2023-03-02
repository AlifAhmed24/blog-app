import React from "react";
import "./section-heading.css";

function SectionHeading(props) {
  return (
    <div className="heading">
      <h1>{props.heading}</h1>
      <a href="#">
        <p>View All Post > </p>
      </a>
    </div>
  );
}

export default SectionHeading;
