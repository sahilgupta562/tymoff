import React from "react";
import "./replay.scss";

const Replay = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 21 21"
    style={{ enableBackground: "new 0 0 21 21" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path className="primary" d="M10.5,2.8V0.1L4.8,3.8l5.7,3.7V4.7c3.8,0,7,3.3,7,7s-3.3,6.9-7,6.9s-6.9-3.2-6.9-6.9h-2c0,5,3.9,9,8.9,9s8.9-4,8.9-9
	S15.5,2.8,10.5,2.8z" />
  </svg>

);

export default Replay;
