import React from "react";
import "./more-option.scss";

const MoreOption = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 12 12.2"
    style={{ enableBackground: "new 0 0 12 12.2" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <circle className="primary" cx="6" cy="1.5" r="1.5" />
      <circle className="primary" cx="6" cy="6.3" r="1.5" />
      <circle className="primary" cx="6" cy="10.7" r="1.5" />
    </g>
  </svg>
);

export default MoreOption;
