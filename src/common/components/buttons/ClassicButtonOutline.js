import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import colors from '../../constants/colors';


const ClassicButtonOutline = (props) => {
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
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    height: 50,
  },
});

export default ClassicButtonOutline;
