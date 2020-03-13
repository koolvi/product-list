import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import colors from '../../constants/colors';


const ClassicButton = (props) => {
  const { children } = props;

  return (
    <TouchableOpacity
      onPress={() => {}}
      style={styles.button}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: 50,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default ClassicButton;
