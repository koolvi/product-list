import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

import Checkbox from '../Checkbox/index';

const Product = (props) => {
  const {
    checked,
    name,
    onPress,
  } = props;
  const result = (checked)
    ? { textDecorationLine: 'line-through', color: 'gray', ...styles.nameProduct }
    : { color: 'white', ...styles.nameProduct}

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
        <Checkbox value={checked}/>
        <Text style={result}>
          {name}
        </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  nameProduct: {
    fontSize: 15,
  },
});

export default Product;
