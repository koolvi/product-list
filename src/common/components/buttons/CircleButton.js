import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


const CircleButton = (props) => {
  const {
    icon,
    backgroundColor,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor, ...styles.button }}
    >
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    borderRadius: 5000,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircleButton;
