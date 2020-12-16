import React from "react";
import "./format.scss";

const Format = ({ width, height, className }) => (
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
      d="M7.5,1H1.3C0.6,1,0,1.5,0,2.2v6.3c0,0.7,0.6,1.3,1.3,1.3h6.3c0.7,0,1.3-0.6,1.3-1.3V2.2
	C8.8,1.5,8.2,1,7.5,1z M7.5,8.9H0.9v-7H8v7H7.5z"
    />
    <path
      className="primary"
      d="M7.5,11.2H1.3c-0.7,0-1.3,0.5-1.3,1.2v6.3C0,19.4,0.6,20,1.3,20h6.3c0.7,0,1.3-0.6,1.3-1.3v-6.3
	C8.8,11.7,8.2,11.2,7.5,11.2z M7.5,19.1H0.9v-7H8v7H7.5z"
    />
    <path
      className="primary"
      d="M17.7,11.2h-6.2c-0.7,0-1.3,0.5-1.3,1.2v6.3c0,0.7,0.6,1.3,1.3,1.3h6.3c0.7,0,1.3-0.6,1.3-1.3
	v-6.3C19,11.7,18.4,11.2,17.7,11.2z M17.7,19.1h-6.6v-7h7.1v7H17.7z"
    />
    <path
      className="primary"
      d="M13.8,0.4L9.7,4.5C9.2,4.9,9.2,5.7,9.6,6.1l4.1,4.1c0.5,0.5,1.2,0.5,1.7,0l4.1-4.1
	c0.5-0.5,0.5-1.2,0-1.7l-4.1-4.1C15-0.1,14.2,0,13.8,0.4z M19,5.6l-4.3,4.3L10,5.3l4.7-4.6l4.6,4.6L19,5.6z"
    />
  </svg>
);

export { Format };
