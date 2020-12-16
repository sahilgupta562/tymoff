import React from "react";
import "./discover.scss";

const DiscoverWeb = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    style={{ enableBackground: "new 0 0 20 20" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path className="primary" d="M10,9c-0.8,0-1.4,1-0.8,1.8c0.9,0.7,1.8,0.1,1.8-0.8C11,9.5,10.6,9,10,9z" />
    <path className="secondary" d="M10,0.5c-6.7,0-11.8,6.9-8.5,14c0.8,1.8,2.2,3.2,4,4c7.1,3.3,14-1.8,14-8.5l0,0C19.5,4.8,15.2,0.5,10,0.5z" />
    <path className="primary" d="M13.8,6.2l-2.4,5.2l-5.2,2.4l2.4-5.2L13.8,6.2 M15.8,4.2L7.9,7.9l-3.7,7.9l7.9-3.7L15.8,4.2z" />
  </svg>
);

const DiscoverMobile = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 107 106.8"
    style={{ enableBackground: "new 0 0 107 106.8" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path className="primary" d="M53.4,47.7c-4.5,0-7.7,5.2-4.2,9.8c4.7,3.6,9.8,0.3,9.8-4.2C59.1,50.3,56.5,47.7,53.4,47.7z"/>
    <path className="secondary" d="M53.4,2.4c-35.9,0-63,37.1-45.5,75c4.3,9.5,12.1,17.1,21.5,21.5c37.9,17.6,75-9.6,75-45.5l0,0
      C104.3,25.2,81.6,2.5,53.4,2.4z"/>
    <path className="primary" d="M73.8,33L60.9,60.9L33,73.8L45.9,46L73.8,33 M84.4,22.4L42.1,42.1L22.4,84.4l42.3-19.6L84.4,22.4z"/>
    
    <path
      className="fill-primary"
      d="M53.4,47.5c-3.2,0-5.9,2.6-5.9,5.9c0,3.2,2.6,5.9,5.9,5.9c3.2,0,5.9-2.6,5.9-5.9C59.2,50.2,56.6,47.6,53.4,47.5
z"
    />
    <path
      className="fill-primary"
      d="M53.9,0C24.4-0.3,0.3,23.4,0,52.9s23.4,53.6,52.9,53.9s53.6-23.4,53.9-52.9C107,24.5,83.4,0.4,53.9,0z M65,65.3
	L21,85.1l20.7-43.6l44-19.9C85.8,21.7,65,65.3,65,65.3z"
    />
  </svg>
);

export { DiscoverWeb, DiscoverMobile };
