import React from "react";
import "./upload.scss";

const Upload = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 486.3 486.3"
    style={{ enableBackground: "0 0 486.3 486.3" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <g>
        <path
          className="primary"
          d="M395.5,135.8c-5.2-30.9-20.5-59.1-43.9-80.5c-26-23.8-59.8-36.9-95-36.9c-27.2,0-53.7,7.8-76.4,22.5
			c-18.9,12.2-34.6,28.7-45.7,48.1c-4.8-0.9-9.8-1.4-14.8-1.4c-42.5,0-77.1,34.6-77.1,77.1c0,5.5,0.6,10.8,1.6,16
			C16.7,200.7,0,232.9,0,267.2c0,27.7,10.3,54.6,29.1,75.9c19.3,21.8,44.8,34.7,72,36.2c0.3,0,0.5,0,0.8,0h86
			c7.5,0,13.5-6,13.5-13.5s-6-13.5-13.5-13.5h-85.6C61.4,349.8,27,310.9,27,267.1c0-28.3,15.2-54.7,39.7-69
			c5.7-3.3,8.1-10.2,5.9-16.4c-2-5.4-3-11.1-3-17.2c0-27.6,22.5-50.1,50.1-50.1c5.9,0,11.7,1,17.1,3c6.6,2.4,13.9-0.6,16.9-6.9
			c18.7-39.7,59.1-65.3,103-65.3c59,0,107.7,44.2,113.3,102.8c0.6,6.1,5.2,11,11.2,12c44.5,7.6,78.1,48.7,78.1,95.6
			c0,49.7-39.1,92.9-87.3,96.6h-73.7c-7.5,0-13.5,6-13.5,13.5s6,13.5,13.5,13.5h74.2c0.3,0,0.6,0,1,0c30.5-2.2,59-16.2,80.2-39.6
			c21.1-23.2,32.6-53,32.6-84C486.2,199.5,447.9,149.6,395.5,135.8z"
        />
        <path
          className="primary"
          d="M324.2,280c5.3-5.3,5.3-13.8,0-19.1l-71.5-71.5c-2.5-2.5-6-4-9.5-4s-7,1.4-9.5,4l-71.5,71.5
			c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l48.5-48.5v222.9c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V231.5
			l48.5,48.5C310.4,285.3,318.9,285.3,324.2,280z"
        />
      </g>
    </g>
  </svg>
);

const UploadProgress = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    style={{ enableBackground: "new 0 0 16 16" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <g>
        <path
          className="primary"
          d="M14.9,8.7c-0.3,0-0.5,0.2-0.5,0.5v3.8c0,1-0.8,1.9-1.9,1.9H3.4c-1,0-1.9-0.8-1.9-1.9V9.1
			c0-0.3-0.2-0.5-0.5-0.5S0.6,8.8,0.6,9.1v3.9c0,1.5,1.2,2.8,2.8,2.8h9.2c1.5,0,2.8-1.2,2.8-2.8V9.2C15.4,8.9,15.2,8.7,14.9,8.7z"
        />
        <path
          className="primary"
          d="M8.3,1.2C8.2,1.1,8.1,1.1,8,1.1c-0.1,0-0.2,0-0.3,0.1L4.8,4.1c-0.2,0.2-0.2,0.5,0,0.6c0.2,0.2,0.5,0.2,0.6,0
			l2.1-2.1V12c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.3,0.5-0.5V2.7l2.1,2.1c0.2,0.2,0.5,0.2,0.6,0c0.2-0.2,0.2-0.5,0-0.6L8.3,1.2z"
        />
      </g>
    </g>
  </svg>
);

const UploadMobile = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 48 48"
    style={{ enableBackground: "new 0 0 48 48" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <circle className="primary" cx="24" cy="24" r="22" />
    <path className="secondary" d="M24,13.2v21.6" />
    <path className="secondary" d="M13.2,24h21.6" />
  </svg>
);

export { Upload, UploadProgress, UploadMobile };