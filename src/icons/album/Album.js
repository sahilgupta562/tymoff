import React from "react";
import "./album.scss";


const Album = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 46 45.9"
    style={{ enableBackground: "new 0 0 46 45.9" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
<path className="primary" d="M7.1,30.8V11H4c-2.2,0-4,1.8-4,4.1v26.7c0,2.2,1.8,4,4,4h26.8c2.2,0,4-1.8,4.1-4v-2.9H15.2
	C10.7,38.9,7.1,35.2,7.1,30.8z"/>
<path className="primary" d="M41.9,0H15.2c-2.2,0-4.1,1.8-4.1,4c0,0,0,0,0,0v26.7c0,2.2,1.8,4.1,4.1,4.1c0,0,0,0,0,0h26.7
	c2.2,0,4.1-1.8,4.1-4c0,0,0,0,0,0V4c0-2.2-1.7-4-3.9-4.1C42,0,42,0,41.9,0z M41.4,28.5c-0.2,0.4-0.7,0.7-1.1,0.7H17.3
	c-0.4,0-0.8-0.2-1-0.5c-0.2-0.3-0.3-0.7-0.2-1.1l3.3-10.8c0.4-1,1.5-1.6,2.5-1.2c0.4,0.1,0.7,0.4,0.9,0.7l4.6,6.4
	c0.6,0.8,1.8,1.1,2.7,0.5l4.2-2.9c0.4-0.3,1-0.4,1.5-0.3c0.5,0.1,1,0.4,1.3,0.9l4.2,6.5C41.6,27.6,41.6,28.1,41.4,28.5z"/>
</svg>



);

export default Album;