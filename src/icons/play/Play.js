import React from "react";
import "./play.scss";

const Play = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 64 64"
    style={{ enableBackground: "new 0 0 64 64" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <g transform="translate(128.000000, 278.000000)">
        <path
          className="primary"
          d="M-95.9-222c-13.2,0-23.9-10.7-23.9-23.9c0-13.2,10.7-23.9,23.9-23.9S-72-259.1-72-245.9
			S-82.7-222-95.9-222L-95.9-222z"
        />
        <path className="secondary" d="M-103-233.6v-24.7l21.2,12.4L-103-233.6L-103-233.6z" />
      </g>
    </g>
  </svg>
);
const UploadPlay = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 64 64"
    style={{ enableBackground: "new 0 0 64 64" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <g transform="translate(128.000000, 278.000000)">
        <path className="secondary" d="M-103-233.6v-24.7l21.2,12.4L-103-233.6L-103-233.6z" />
      </g>
    </g>
  </svg>
);
export {Play, UploadPlay};
