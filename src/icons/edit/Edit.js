import React from "react";
import "./edit.scss";

const Edit = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 48 48"
    style={{ enableBackground: "new 0 0 48 48" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      className="primary"
      d="M45.8,4.7L43.1,2c-2.6-2.6-7-2.6-9.6,0l-3.7,3.7l0,0L4.3,31.3l-0.5,0.5c0,0.1-0.1,0.2-0.1,0.3l-0.2,0.7L0,46.3
	c-0.1,0.4,0,1,0.3,1.3C0.7,47.9,1,48,1.3,48c0.1,0,0.2,0,0.3,0l13.4-3.3l0.8-0.2l0,0l1-1L44,16.4l0,0l1.8-1.8
	C48.5,11.8,48.5,7.5,45.8,4.7C45.8,4.8,45.8,4.8,45.8,4.7z M3.2,44.7l2.3-9.5l7.2,7.2L3.2,44.7z M15.4,41l-8.5-8.5L31.7,7.8l8.5,8.5
	L15.4,41z M43.8,12.5L42,14.3l-8.5-8.5L35.4,4c1.6-1.6,4.1-1.6,5.8,0l2.8,2.8C45.4,8.3,45.5,10.9,43.8,12.5L43.8,12.5z"
    />
  </svg>
);

export default Edit;
