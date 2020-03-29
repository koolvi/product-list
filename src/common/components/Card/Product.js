import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Checkbox from '../Checkbox/index';
import IconButton from '../buttons/IconButton';
import IconDeleteProduct from './IconDeleteProduct';
import colors from '../../constants/colors';

const Product = (props) => {
  const {
    product,
    onSetChecked,
    onDelete,
  } = props;

  const {
    name,
    checked,
  } = product;

  const result = (checked)
    ? { textDecorationLine: 'line-through', color: colors.SELECTED, ...styles.nameProduct }
    : { color: 'white', ...styles.nameProduct}

  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => onSetChecked(product)}
        style={styles.container}
      >
          <Checkbox value={checked}/>
          <Text style={result}>
            {name}
          </Text>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <IconButton
          onPress={() => onDelete(product)}
          icon={<IconDeleteProduct />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
  },
  nameProduct: {
    flex: 1,
    fontSize: 15,
  },
  iconContainer: {
    marginRight: 20,
    marginLeft: 5,
  },
});

export default Product;
