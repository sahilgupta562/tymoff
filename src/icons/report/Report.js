import React from "react";
import "./report.scss";

const Report = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 31.07 38"
    style={{ enableBackground: "new 0 0 31.07 38" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      className="primary"
      d="M6.65,3.17a9.63,9.63,0,0,1,8.9-1c5,2.1,6.8,6.3,14.5.8.7-.5,1.2-.3,1.2.5v14.4a3.58,3.58,0,0,1-1.1,2.5c-1.3,1.2-3.8,2.9-6.4,2.8-3.9-.1-7.7-4.3-11.3-4.3a12.46,12.46,0,0,0-5.9,1.9c-.7.4-1.2.1-1.2-.7V5.47a3.37,3.37,0,0,1,1.3-2.3Z"
      transform="translate(-1.17 -0.47)"
    />
    <path
      className="secondary"
      d="M4.25,2.6c-.94,2.91-.52,5.81-.6,8.71L3.7,20l.1,17.41a1,1,0,1,1-2.09,0h0L1.8,20l.05-8.71c-.07-2.9.35-5.8-.6-8.71a1.58,1.58,0,0,1,3-1A1.53,1.53,0,0,1,4.25,2.6Z"
      transform="translate(-1.17 -0.47)"
    />
  </svg>
);

export default Report;
