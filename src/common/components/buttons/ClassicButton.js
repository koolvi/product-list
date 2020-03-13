import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import colors from '../../constants/colors';


const ClassicButton = () => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={styles.button}
    >
      <Text style={styles.nameButton}>
        Добавить
      </Text>
      <Text style={styles.nameButton}>
        категорию
      </Text>
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
  nameButton: {
    fontSize: 15,
    color: colors.PRIMARY,
    textTransform: 'uppercase',
    marginRight: 5,
    marginLeft: 5,
  },
});

export default ClassicButton;
