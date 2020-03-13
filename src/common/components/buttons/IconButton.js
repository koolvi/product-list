import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


const IconButton = (props) => {
  const { icon, borderColor } = props;

  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{ borderColor, ...styles.button }}
    >
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    borderRadius: 5000,
    borderWidth: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});

export default IconButton;
