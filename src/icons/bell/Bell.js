import React from "react";
import "./bell.scss"

const Bell = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    style={{ enableBackground: "new 0 0 20 20" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
<g>
	<path className="primary" d="M11.9,2.8C14.6,4,15.9,6,15.8,9c0,1.3,0,2.6,0.1,3.9s0.7,2.5,1.6,3.4c0.2,0.2,0.3,0.5,0.5,0.9
		c-5.4,0-10.6,0-16,0c0.1-0.4,0.2-0.7,0.4-1c1.2-1.2,1.7-2.7,1.7-4.3c0-1.2,0-2.4,0-3.5C4.1,6,5.2,4.2,7.4,3C7.7,2.9,7.9,2.6,8,2.4
		c0.2-1.3,0.9-1.8,2-1.8s1.8,0.7,1.9,2C11.9,2.6,11.9,2.7,11.9,2.8z"/>
	<path className="primary" d="M7.8,17.4c2.5,0,1.6,0,4.1,0c0,1.2-0.8,2-1.9,2.1C8.9,19.5,8.1,18.7,7.8,17.4z"/>
</g>
  </svg>
);

export default Bell;