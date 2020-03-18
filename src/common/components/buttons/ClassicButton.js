import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import colors from '../../constants/colors';


const ClassicButton = (props) => {
  const { styleButton, onPress, children } = props;
  const { borderRadiusButton, widthButton, heightButton } = styleButton;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: borderRadiusButton,
        width: widthButton,
        height: heightButton,
        ...styles.button
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
  },
});

export default ClassicButton;
