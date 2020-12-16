import React from "react";
import "./cross.scss"

const Cross = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 48 48"
    style={{ enableBackground: "new 0 0 48 48" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g className="primary">
      <g className="secondary">
        <g>
          <path d="M0,0 L37,37 L0,0 Z"></path>
        </g>
        <path d="M0,0 L37,37 L0,0 Z" transform="translate(18.500000, 18.500000) rotate(-270.000000) translate(-18.500000, -18.500000) "></path>
      </g>
    </g>
  </svg>
);

export default Cross;
