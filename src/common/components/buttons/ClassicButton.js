import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import colors from '../../constants/colors';


const ClassicButton = (props) => {
  const {
    style,
    disabled = false,
    onPress,
    children,
  } = props;

  const styleForButton = (disabled) ? styles.disabledButton : styles.button
  return (
    <TouchableOpacity
      onPress={disabled ? null : onPress}
      activeOpacity={disabled ? 1 : 0.5}
      style={{
        ...styleForButton,
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
  disabledButton: {
    backgroundColor: colors.SELECTED,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    height: 50,
  },
});

export default ClassicButton;
