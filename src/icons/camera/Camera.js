import React from "react";

const Camera = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 512 512"
    style={{ enableBackground: "new 0 0 512 512" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
<g>
	<g>
		<path className="st0" d="M255.9,147.4c-69.1,0-125.3,56.2-125.3,125.2c0,69.1,56.2,125.3,125.3,125.3c69.1,0,125.2-56.2,125.2-125.3
			C381.2,203.5,325,147.4,255.9,147.4z M255.9,371.4c-54.5,0-98.8-44.3-98.8-98.8c0-54.4,44.3-98.8,98.8-98.8
			c54.4,0,98.8,44.3,98.8,98.8C354.7,327.1,310.4,371.4,255.9,371.4z"/>
	</g>
	<g>
		<path className="st0" d="M509.1,143.9c0-24.9-20.3-45.2-45.2-45.2H392l-28.4-56.7c-2.3-4.5-6.8-7.3-11.8-7.3h-192
			c-5.1,0-9.6,2.8-11.9,7.3l-28.3,56.7l-71.7,0.1c-24.9,0-45.2,20.3-45.2,45.2v288C2.8,457,23,477.3,48,477.3h416
			c24.9,0,45.2-20.3,45.2-45.3L509.1,143.9z M482.8,432c0,10.3-8.4,18.8-18.8,18.8H48c-10.3,0-18.8-8.4-18.8-18.7v-288
			c0-10.3,8.4-18.7,18.7-18.7l79.9-0.1c5,0,9.6-2.8,11.8-7.3L168,61.2h175.6l28.3,56.7c2.3,4.5,6.8,7.3,11.8,7.3h80
			c10.4,0,18.9,8.4,18.9,18.7V432z"/>
	</g>
</g>
  </svg>
);

export default Camera;