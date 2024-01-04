import React from 'react';
import { Svg, Path } from 'react-native-svg';

const RecipeIcon = ({ color }) => {
  return (
    <Svg width="28" height="20" viewBox="0 0 28 20" fill="none">
      <Path
        d="M1 18.1183H26.2043"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.46289 15.0215C2.92567 12.3853 4.29808 9.99477 6.3413 8.26589C8.38453 6.537 10.9692 5.57919 13.6457 5.55913C16.3167 5.56536 18.8987 6.52018 20.9311 8.25326C22.9635 9.98634 24.3143 12.385 24.7425 15.0215"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6457 5.47313C14.881 5.47313 15.8823 4.47178 15.8823 3.23656C15.8823 2.00135 14.881 1 13.6457 1C12.4105 1 11.4092 2.00135 11.4092 3.23656C11.4092 4.47178 12.4105 5.47313 13.6457 5.47313Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default RecipeIcon;
