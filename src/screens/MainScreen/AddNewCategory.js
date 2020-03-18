import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import ClassicButton from '../../common/components/buttons/ClassicButton';
import colors from '../../common/constants/colors';

const AddNewCategory = () => {
  return (
    <View style={styles.containerButton}>
      <ClassicButton
        styleButton={{
          borderRadiusButton: 50,
          widthButton: '70%',
          heightButton: 50,
        }}>
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
    color: colors.PRIMARY,
    textTransform: 'uppercase',
    marginRight: 5,
    marginLeft: 5,
  },
});

export default AddNewCategory;
