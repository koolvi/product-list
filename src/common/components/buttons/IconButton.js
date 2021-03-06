import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


const IconButton = (props) => {
  const {
    icon,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 35,
    borderRadius: 5000,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
