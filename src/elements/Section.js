import React from "react";
import propTypes from "prop-types";

export default function Section(props) {
  const className = ["section"];
  className.push(props.className);

  if (props.isCenteredContent) className.push("center-content");

  return (
    <section className={className.join(" ")} data-aos={props.aos}>
      {props.children}
    </section>
  );
}

Section.propTypes = {
  aos: propTypes.string,
  isCenteredContent: propTypes.bool,
  className: propTypes.string,
};
