import React from 'react';
import { Svg, Path } from 'react-native-svg';

const AddIcon = (props) => {
  const { color } = props;

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <Path fill={color} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      <Path d="M0 0h24v24H0z" fill="none"/>
    </Svg>
  );
};

export default AddIcon;
