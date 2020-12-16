import React from "react";
import "./sendIcon.scss";

const SendIcon = ({ width, height, className }) => (
<svg 
  className={`svg-icon ${className || ""}`}
  width={width}
  height={height}
  viewBox="0 0 20 20"
  style={{ enableBackground: "new 0 0 20 20" }}
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
>
<path 
className="primary" 
d="M19.3,8.9c0.9,0.4,0.9,1.7,0,2.1L1.7,19.5c-0.6,0.3-1.3,0-1.6-0.6C0,18.8,0,18.6,0,18.5l3.6-6.7l6.2-1.7
	L3.6,8.3L0,1.5c0-0.7,0.5-1.2,1.2-1.2c0.2,0,0.4,0,0.5,0.1L19.3,8.9z"/>
</svg>
);

export default SendIcon;
