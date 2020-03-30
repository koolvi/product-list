import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import colors from '../../common/constants/colors';

const DeleteAllCategories = (props) => {
  const { onPress } = props;

  return (
    <View style={styles.containerButton}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}>
        <Text style={styles.nameButton}>
          Удалить
        </Text>
        <Text style={styles.nameButton}>
          все
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 80,
  },  
  nameButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.PRIMARY,
    textTransform: 'uppercase',
    marginRight: 5,
    marginLeft: 5,
  },
  button: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
  },
});

export default DeleteAllCategories;
