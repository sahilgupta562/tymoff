import React from "react";
import "./gif.scss";


const Gif = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 187.3 85.8"
    style={{ enableBackground: "new 0 0 187.3 85.8" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path className="primary" d="M46.7,40.6h30v32.3c-7.8,8.6-19,12.9-33.6,12.9c-12.3,0-22.5-4-30.8-12.1C4.1,65.7,0,55.5,0,43.2
		s4.2-22.6,12.6-30.8S31.2,0,43.2,0C55.1,0,65,3.5,72.9,10.4l-7.5,10.7c-3.2-2.8-6.5-4.7-9.8-5.8s-7.1-1.6-11.4-1.6
		c-8.4,0-15.4,2.7-21.1,8.1c-5.7,5.4-8.5,12.5-8.5,21.3c0,8.8,2.8,15.9,8.3,21.2c5.5,5.3,12.2,8,20.1,8c7.9,0,14.4-1.7,19.7-5.1
		V53.7h-16L46.7,40.6z"/>
    <path className="primary" d="M95.1,2h14v82.9h-14V2z" />
    <path className="primary" d="M146.1,15.1v22.8h36.8v12.9h-36.8v34.1h-14V2h55.2l-0.1,13L146.1,15.1L146.1,15.1z" />
  </svg>



);

export default Gif;