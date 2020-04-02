import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import IconNoFiles from './IconNoFiles';
import colors from '../../common/constants/colors';


const EmptyBlockCategory = () => {
  return (
  <View style={styles.container}>
    <IconNoFiles />
    <Text style={styles.text}>список категорий пуст</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: colors.SELECTED,
  },
});


export default EmptyBlockCategory;
