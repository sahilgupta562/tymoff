import React from "react";
import "./newfeed.scss"

const Newfeed = ({ width, height, className }) => (
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
      <path
        className="primary"
        d="M7.1,9.8l9.1,9.1l9.1-9.1c0.7-0.7,1.6-0.7,2.3,0l0,0c0.7,0.7,0.7,1.6,0,2.3L17.1,22.5c-0.5,0.5-1.5,0.5-2.1,0
		L4.6,12.1c-0.7-0.7-0.7-1.6,0-2.3l0,0C5.3,9.1,6.4,9.1,7.1,9.8z"
      />
    </g>
  </svg>
);
const DetailpgDA = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 23.3 12.6"
    style={{ enableBackground: "new 0 0 23.3 12.6" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <path
        className="primary"
        d="M23.3,0.9c0,0.4-0.2,0.8-0.5,1.1l-9.9,9.8c0,0-0.1,0.2-0.3,0.3c-0.2,0.2-0.6,0.5-0.9,0.5
        c-0.3,0-0.6-0.2-0.8-0.4l-0.5-0.4l0,0L0.5,2C0.2,1.7,0,1.3,0,0.9C0,0.5,0,0.1,0.8,0c0.5,0.1,1.3,1,2,1.7l8.9,8.8l8.8-8.8
        C21.2,1,22,0.1,22.5,0C23.3,0.1,23.3,0.5,23.3,0.9z"
      />
    </g>
  </svg>
);

export { Newfeed, DetailpgDA };
