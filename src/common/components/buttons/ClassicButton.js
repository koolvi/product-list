import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import colors from '../../constants/colors';


const ClassicButton = (props) => {
  const { style, onPress, children } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        ...style,
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    height: 50,
  },
});

export default ClassicButton;
