import React from "react";

const Mute = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 240 240"
    style={{ enableBackground: "new 0 0 240 240" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="NO_NOTIF_BELL">
      <circle id="Oval" className="st0" cx="120" cy="120" r="120" />
      <g id="Group-7" transform="translate(28.000000, 42.000000)">
        <g id="Group" transform="translate(8.000000, 0.000000)">
          <g id="bell_filled-01-copy" transform="translate(106.500000, 78.000000) rotate(-19.000000) translate(-106.500000, -78.000000) translate(56.000000, 13.000000)">
            <path id="Path" className="st1" d="M35,114v0.1c0,8.8,6.9,15.9,15.5,15.9S66,122.9,66,114.1V114L35,114z" />
            <path
              id="Path_1_"
              className="st1"
              d="M99.8,95.1L85.9,74.7l0-25.5C85.8,32.5,73.9,18,57.4,14.7l0-7.8c0-3.8-3.1-6.9-6.9-6.9
					s-6.9,3.1-6.9,6.9l0,7.8C27,18.1,15.1,32.5,15.1,49.3l0,25.5L1.2,95.1c-1.5,2.1-1.6,4.9-0.4,7.2S4.4,106,7,106l87,0
					c2.6,0,5-1.4,6.2-3.7S101.2,97.2,99.8,95.1L99.8,95.1z"
            />
          </g>
          <path
            id="Path_2_"
            className="st2"
            d="M5.1,90.4l19.7-14.7l8.3-24.1C38.7,35.7,54.6,26,71.3,28.2l2.5-7.4c1.2-3.6,5.2-5.5,8.8-4.3
				c3.6,1.2,5.6,5.2,4.3,8.8l-2.5,7.4c14.5,8.5,21.1,26.1,15.6,42l-8.3,24.1l6.5,23.7c0.7,2.5-0.1,5.2-2,7s-4.6,2.4-7.1,1.5L7,102.6
				c-2.5-0.8-4.3-3-4.7-5.5S3,91.9,5.1,90.4L5.1,90.4z"
          />
          <g id="Group-6-Copy" transform="translate(78.000000, 115.000000)">
            <circle id="Oval_1_" className="st3" cx="14.5" cy="14.5" r="14.5" />
            <circle id="Oval-Copy" className="st2" cx="14.5" cy="14.5" r="12.5" />
            <text transform="matrix(1 0 0 1 10.2886 20)" className="st3 st4 st5">
              0
            </text>
          </g>
        </g>

        <g id="bell_filled-01-copy-2" transform="translate(69.500000, 78.000000) scale(-1, 1) rotate(-19.000000) translate(-69.500000, -78.000000) translate(19.000000, 13.000000)">
          <path id="Path_3_" className="st2" d="M35,114v0.1c0,8.8,6.9,15.9,15.5,15.9S66,122.9,66,114.1V114L35,114z" />
        </g>
      </g>
    </g>
  </svg>
);

export default Mute;
