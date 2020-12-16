import React from "react";
import "./country.scss";

const CountryWeb = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    style={{ enableBackground: "new 0 0 20 20" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <circle className="primary" cx="10" cy="10" r="9.6" />
    <ellipse className="primary" cx="10" cy="10" rx="4.8" ry="9.6" />
    <path className="secondary" d="M2.5,16.2c1.8-1.1,4.4-1.8,7.4-1.8s5.6,0.7,7.4,1.7" />
    <path className="secondary" d="M17.4,3.8C15.6,4.9,13,5.6,10,5.6S4.4,4.9,2.6,3.9" />
    <line className="secondary" x1="0.4" y1="10" x2="19.5" y2="10" />
    <line className="secondary" x1="10" y1="0.4" x2="10" y2="19.6" />
  </svg>
);

export { CountryWeb };
