import React from 'react';
import { Svg, Path } from 'react-native-svg';
import colors from '../../../constants/colors';


const CheckboxOutlineIcon = (props) => {
  const { color = colors.PRIMARY } = props;

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <Path fill={color} d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
      <Path d="M0 0h24v24H0z" fill="none"/>
    </Svg>
  );
};

export default CheckboxOutlineIcon;
