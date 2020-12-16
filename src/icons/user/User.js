import React from "react";
import "./user.scss";

const SignInUser = ({ width, height, className }) => (
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
      d="M17.6,19.4c-4.5,0-7.5,0-15,0c-0.9,0-0.8-1-0.8-1.7c0-1.4,0.5-2.7,1.6-3.7s2.3-1.6,3.7-1.6h6.1
	c1.4,0,2.7,0.5,3.7,1.6c1,1,1.6,2.3,1.6,3.7C18.5,18.3,18.7,19.4,17.6,19.4z"
    />
    <circle className="primary" cx="10.1" cy="5.4" r="4.8" />
  </svg>
);

const DefaultUser = ({ width, height, className }) => (
  <svg
    className={`svg-icon ${className || ""}`}
    width={width}
    height={height}
    viewBox="0 0 128 128"
    style={{ enableBackground: "new 0 0 128 128" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <path
          d="M44.9521509,100.352 L25.856,110.768302 C24.7353962,111.379321 23.7283019,112.130415 22.7912453,112.949132 C33.9248302,122.336604 48.2970566,128 64,128 C79.5870189,128 93.8674717,122.421132 104.96966,113.16166 C103.94566,112.297057 102.834717,111.519396 101.603019,110.905962 L81.1544151,100.682868 C78.5123019,99.3618113 76.8434717,96.6617358 76.8434717,93.7080755 L76.8434717,85.6851321 C77.4182642,85.0306415 78.0751698,84.1901887 78.7779623,83.1975849 C81.5649811,79.2609811 83.6733585,74.930717 85.1344906,70.3879245 C87.757283,69.5788679 89.6893585,67.1565283 89.6893585,64.2777358 L89.6893585,55.7138113 C89.6893585,53.8300377 88.8513208,52.146717 87.5495849,50.9681509 L87.5495849,38.5883774 C87.5495849,38.5883774 90.0926792,19.3231698 64.0024151,19.3231698 C37.9121509,19.3231698 40.4552453,38.5883774 40.4552453,38.5883774 L40.4552453,50.9681509 C39.1510943,52.146717 38.3154717,53.8300377 38.3154717,55.7138113 L38.3154717,64.2777358 C38.3154717,66.533434 39.501283,68.5186415 41.2763774,69.6658113 C43.4161509,78.9808302 49.0191698,85.6851321 49.0191698,85.6851321 L49.0191698,93.5100377 C49.0167547,96.3598491 47.4566038,98.9850566 44.9521509,100.352 Z"
          className="primary"
        ></path>
        <path
          d="M65.0940377,0.00966037736 C29.7539623,-0.594113208 0.613433962,27.5658868 0.00966037736,62.9059623 C-0.333283019,82.944 8.59773585,100.953358 22.8178113,112.929811 C23.7476226,112.11834 24.7450566,111.374491 25.8535849,110.770717 L44.9497358,100.354415 C47.4541887,98.9874717 49.0143396,96.3622642 49.0143396,93.5076226 L49.0143396,85.682717 C49.0143396,85.682717 43.4089057,78.9784151 41.2715472,69.6633962 C39.4988679,68.5162264 38.3106415,66.533434 38.3106415,64.2753208 L38.3106415,55.7113962 C38.3106415,53.8276226 39.1486792,52.1443019 40.4504151,50.9657358 L40.4504151,38.5859623 C40.4504151,38.5859623 37.9073208,19.3207547 63.9975849,19.3207547 C90.0878491,19.3207547 87.5447547,38.5859623 87.5447547,38.5859623 L87.5447547,50.9657358 C88.8489057,52.1443019 89.6845283,53.8276226 89.6845283,55.7113962 L89.6845283,64.2753208 C89.6845283,67.1541132 87.7524528,69.5764528 85.1296604,70.3855094 C83.6685283,74.9283019 81.5601509,79.258566 78.7731321,83.1951698 C78.0703396,84.1877736 77.413434,85.0282264 76.8386415,85.682717 L76.8386415,93.7056604 C76.8386415,96.6593208 78.5074717,99.3618113 81.1495849,100.680453 L101.598189,110.903547 C102.825057,111.516981 103.933585,112.292226 104.95517,113.154415 C118.745358,101.653736 127.654642,84.4582642 127.985509,65.0940377 C128.594113,29.7539623 100.436528,0.613433962 65.0940377,0.00966037736 Z"
          className="secoundary"
        ></path>
      </g>
    </g>
  </svg>
);

export { SignInUser, DefaultUser };