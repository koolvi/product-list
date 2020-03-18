import React from 'react';
import { Svg, Path } from 'react-native-svg';
import colors from '../../../constants/colors';

const CheckboxIcon = (props) => {
  const { color = colors.SELECTED } = props;

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <Path d="M0 0h24v24H0z" fill="none"/>
      <Path fill={color} d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </Svg>
  );
};

export default CheckboxIcon;
