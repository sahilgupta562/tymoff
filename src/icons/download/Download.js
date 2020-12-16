import React from "react";
import "./download.scss";

const Download = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    style={{ enableBackground: "new 0 0 16 16" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <g>
        <path
          className="primary"
          d="M15.5,8.4c-0.3,0-0.5,0.2-0.5,0.5V13c0,1.1-0.9,2.1-2.1,2.1H3c-1.1,0-2.1-0.9-2.1-2.1V8.8
			c0-0.3-0.2-0.5-0.5-0.5S0,8.5,0,8.8V13c0,1.6,1.3,3,3,3h10c1.6,0,3-1.3,3-3V8.9C16,8.6,15.8,8.4,15.5,8.4z"
        />
        <path
          className="primary"
          d="M7.7,12.4c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1l2.9-2.9c0.2-0.2,0.2-0.5,0-0.6c-0.2-0.2-0.5-0.2-0.6,0
			L8.5,11V1.6c0-0.3-0.2-0.5-0.5-0.5S7.5,1.4,7.5,1.6v9.3L5.4,8.8c-0.2-0.2-0.5-0.2-0.6,0C4.6,9,4.6,9.3,4.8,9.4L7.7,12.4z"
        />
      </g>
    </g>
  </svg>
);

export default Download;
