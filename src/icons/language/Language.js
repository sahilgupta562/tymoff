import React from "react";
import "./language.scss";

const LanguageWeb = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    style={{ enableBackground: "new 0 0 32 32" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="layer1" transform="translate(0,-1020.3622)">
      <path className="primary" d="M16.4,1026.6h12.8c1.1,0,2,0.9,2,2v18.5c0,1.1-0.9,2-2,2H16.7l-0.9-3.8" />
      <path className="primary" d="M20.6,1045.1H2.8c-1.1,0-2-0.9-2-2v-18.5c0-1.1,0.9-2,2-2h12.6L20.6,1045.1z" />
      <path className="secondary" d="M16.7,1049.1l4-4" />
      <path
        className="primary"
        d="M8,1029.9h3.3c0,1.5-1,2.8-2.5,3.2c-1.4,0.4-3-0.2-3.7-1.5c-0.7-1.3-0.5-2.9,0.5-4
		c1.1-1.1,2.7-1.3,4-0.5"
      />
      <path className="secondary" d="M18,1031.9h9.3" />
      <path className="secondary" d="M26.6,1041.2c-3.4-1.8-5.7-5.3-5.9-9.2" />
      <path className="secondary" d="M24.6,1031.9c-0.2,3.5-2.1,6.7-5,8.6" />
      <path className="secondary" d="M22.6,1029.2v2.7" />
    </g>
  </svg>
);

export { LanguageWeb };
