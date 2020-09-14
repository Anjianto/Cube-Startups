import React from "react";
import propTypes from "prop-types";

export default function Card(props) {
  const className = ["tiles-item"];
  className.push(props.className);

  return (
    <div
      className={className.join(" ")}
      data-aos={props.aos}
      data-aos-delay={props.aosDelay}
    >
      <div
        className={`tiles-item-inner ${props.hasShadow ? "has-shadow" : ""}`}
      >
        {props.children}
      </div>
    </div>
  );
}

Card.propTypes = {
  aos: propTypes.string,
  aosDelay: propTypes.number,
  classNmae: propTypes.string,
  hasShadow: propTypes.bool,
};
