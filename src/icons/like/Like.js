import React from "react";
import "./like.scss";

const Like = ({ width, height, className }) => (
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
      d="M7.4,2.3c-1.7-1.6-4.3-1.6-6,0c-1.7,1.7-1.7,4.4,0,6.1L8,15l6.6-6.6c1.7-1.7,1.7-4.4,0-6.1l0,0
	C13.8,1.5,12.7,1,11.5,1l0,0c-1.1,0-2.2,0.5-3,1.3L8,2.8L7.4,2.3z"
    />
  </svg>
);

export default Like;
