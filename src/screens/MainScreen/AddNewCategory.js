import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import ClassicButton from '../../common/components/buttons/ClassicButton';
import colors from '../../common/constants/colors';

const AddNewCategory = (props) => {
  const { onPress } = props;

  return (
    <View style={styles.containerButton}>
      <ClassicButton
        onPress={onPress}
        style={styles.button}>
        <Text style={styles.nameButton}>
          Добавить
        </Text>
        <Text style={styles.nameButton}>
          категорию
        </Text>
      </ClassicButton>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 80,
  },  
  nameButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.SECONDARY,
    textTransform: 'uppercase',
    marginRight: 5,
    marginLeft: 5,
  },
  button: {
    width: '70%',
  },
});

export default AddNewCategory;
