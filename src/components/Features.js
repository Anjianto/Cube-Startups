import React from "react";
import propTypes from "prop-types";

export default function Features(props) {
  return (
    <div
      className="tiles-item"
      data-aos={props.aos}
      data-aos-delay={props.aosDelay}
    >
      <div className="tiles-item-inner">
        <div className="features-tiles-item-header" style={{ margin: "auto" }}>
          <div className="features-tiles-item-image mb-16">
            <img
              src={props.data.img}
              alt={props.data.imgAlt}
              width={64}
              height={64}
            />
          </div>
        </div>
        <div
          className="features-tiles-item-content"
          style={{ textAlign: "center" }}
        >
          <h4 className="mt-0 mb-8">{props.data.title}</h4>
          <p className="m-0 text-sm">{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}

Features.propTypes = {
  aos: propTypes.string,
  aosDelay: propTypes.number,
  data: propTypes.object,
};
