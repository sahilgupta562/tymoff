import React from "react";
import "./home.scss";

const HomeWeb = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 59.6 64"
    style={{ enableBackground: "new 0 0 59.6 64" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      className="primary"
      d="M29.9,2.9c0.1,0,0.3,0,0.3,0.1l26.4,26.5c0.1,0.1,0.1,0.2,0.1,0.4v30.7c0,0.3-0.2,0.5-0.5,0.5H42V46.7  c0-5.4-4.4-9.8-9.8-9.8h-4.5c-5.4,0-9.8,4.4-9.8,9.8v14.4H3.4c-0.3,0-0.5-0.2-0.5-0.5V29.9c0-0.1,0.1-0.2,0.1-0.3L29.6,3  C29.6,2.9,29.8,2.9,29.9,2.9 M29.9,0c-0.9,0-1.7,0.4-2.4,1L1,27.5c-0.6,0.6-1,1.5-1,2.4v30.7C0,62.5,1.4,64,3.3,64c0,0,0.1,0,0.1,0  h17.3V46.7c0-3.9,3.1-7,7-7h4.5c3.9,0,7,3.1,7,7V64h17.1c1.8,0,3.3-1.5,3.3-3.3v0V29.9c0-0.9-0.4-1.7-1-2.4L32.3,1  C31.6,0.4,30.8,0,29.9,0L29.9,0z"
    />
  </svg>
);

const HomeMobile = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 59.6 64"
    style={{ enableBackground: "new 0 0 59.6 64" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      className="primary"
      d="M29.9,2.9c0.1,0,0.3,0,0.3,0.1l26.4,26.5c0.1,0.1,0.1,0.2,0.1,0.4v30.7c0,0.3-0.2,0.5-0.5,0.5H42V46.7
	c0-5.4-4.4-9.8-9.8-9.8h-4.5c-5.4,0-9.8,4.4-9.8,9.8v14.4H3.4c-0.3,0-0.5-0.2-0.5-0.5V29.9c0-0.1,0.1-0.2,0.1-0.3L29.6,3
	C29.6,2.9,29.8,2.9,29.9,2.9 M29.9,0c-0.9,0-1.7,0.4-2.4,1L1,27.5c-0.6,0.6-1,1.5-1,2.4v30.7C0,62.5,1.4,64,3.3,64h0.1h17.3V46.7
	c0-3.9,3.1-7,7-7h4.5c3.9,0,7,3.1,7,7V64h17.1c1.8,0,3.3-1.5,3.3-3.3l0,0V29.9c0-0.9-0.4-1.7-1-2.4L32.3,1C31.6,0.4,30.8,0,29.9,0
	L29.9,0z"
    />
    <path
      className="secoundry"
      d="M59.6,29.9v30.7c0,1.8-1.4,3.4-3.3,3.4c0,0,0,0-0.1,0H39.1V46.7c0-3.9-3.1-7-7-7h-4.5c-3.9,0-7,3.1-7,7V64H3.3
	C1.5,64,0,62.5,0,60.7l0,0V29.9c0-0.9,0.4-1.7,1-2.4L27.5,1c1.3-1.3,3.4-1.3,4.7,0l0,0l26.4,26.5C59.2,28.2,59.6,29,59.6,29.9z"
    />
  </svg>
);

export { HomeWeb, HomeMobile };