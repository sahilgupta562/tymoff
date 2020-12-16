import React from "react";
import "./uparrow.scss"

const Uparrow = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    style={{ enableBackground: "new 0 0 32 32" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <circle className="primary" cx="16" cy="16" r="15" />
      <polyline className="primary" points="9,19 16,12 23,19 	" />
    </g>

  </svg>
);

export default Uparrow;