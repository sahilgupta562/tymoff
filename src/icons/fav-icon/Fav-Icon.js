import React from "react";
import "./fav-icon.scss";

const Left = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 100 100"
    style={{ enableBackground: "new 0 0 100 100" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <circle id="Oval" className="primary" cx="50" cy="50" r="50" />
    <polygon id="Shape" className="secondary" points="61.8,34.2 57.3,29.5 38.2,49.7 57.3,69.9 61.8,65.2 47.1,49.7 " />
  </svg>
);

const Right = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 100 100"
    style={{ enableBackground: "new 0 0 100 100" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <circle id="Oval" className="primary" cx="50" cy="50" r="50" />
    <polygon id="Shape" className="secondary" points="39.4,35.8 43.4,31.5 60.6,49.7 43.4,67.9 39.4,63.7 52.6,49.7 " />
  </svg>
);

const Down = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 49.5 29.4"
    style={{ enableBackground: "new 0 0 49.5 29.4" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0.4234" y1="14.6817" x2="48.9333" y2="14.6817">
      <stop offset="2.702703e-03" style={{stopColor:"#DA3FC0"}} />
      <stop offset="0.5369" style={{stopColor:"#F323A7"}} />
      <stop offset="1" style={{stopColor:"#DA3FC0"}} />
    </linearGradient>
    <polygon style={{fill:"url(#SVGID_1_)"}} class="st0" points="48.9,4.5 30.8,23.2 25.4,28.9 19.7,23.4 0.4,4.7 4.4,0.5 19.6,15.2 25.2,20.7 30.7,15 44.8,0.5 " />
  </svg>
);

export { Left, Right,Down };
