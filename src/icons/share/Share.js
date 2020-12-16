import React from "react";
import "./share.scss";

const Share = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    style={{ enableBackground: "new 0 0 16 16" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      className="primary"
      d="M15.3,5.7l-4.2-4.2c-0.1-0.1-0.2-0.2-0.4-0.2c-0.3,0-0.5,0.2-0.5,0.6V4H8.3C4.3,4,1.9,5.1,1,7.3
	c-0.3,0.9-0.5,1.8-0.5,2.8c0,0.9,0.4,2.2,1.1,3.8L1.7,14l0.1,0.3c0,0.1,0.1,0.1,0.1,0.2C2,14.6,2,14.6,2.1,14.6c0.1,0,0.2,0,0.2-0.1
	s0.1-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.2c0-0.4,0-0.7,0-1c0-0.5,0-1,0.2-1.5C2.7,11,2.8,10.6,3,10.2
	c0.2-0.3,0.4-0.6,0.7-0.8S4.3,9,4.6,8.8C5,8.6,5.3,8.5,5.7,8.4C6,8.3,6.4,8.2,6.9,8.2c0.4,0,0.9-0.1,1.5-0.1h1.9v2.1
	c0,0.3,0.2,0.5,0.5,0.6c0.1,0,0.3-0.1,0.4-0.2l4.2-4.2c0.1-0.1,0.2-0.2,0.2-0.4C15.5,5.9,15.4,5.8,15.3,5.7z"
    />
  </svg>
);

export default Share;
