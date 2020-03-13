import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

import Checkbox from '../Checkbox/index';

const Product = (props) => {
  const { value, name } = props;

  return (
    <TouchableOpacity
      onPress={() => {}}
      style={styles.container}
    >
        <Checkbox value={value}/>
        <Text style={value
          ? { textDecorationLine: 'line-through', color: 'gray', ...styles.nameProduct }
          : { color: 'white', ...styles.nameProduct}
        }>
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
