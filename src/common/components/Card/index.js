import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Product from './Product';
import colors from '../../constants/colors';
import IconButton from '../buttons/IconButton';
import AddIcon from '../buttons/icons/AddIcon';
import DeleteIcon from '../buttons/icons/DeleteIcon';


const renderProducts = (allProducts, onSetChecked) => {
  console.log(allProducts);
  return allProducts.map(product => (
    <Product
      key={product.id}
      product={product}
      onSetChecked={onSetChecked}
    />
  ))
};

const Card = (props) => {
  const {
    allProducts,
    nameCategory,
    color,
    onSetChecked,
  } = props;
  return (
    <>
      <Text style={{ color: color, ...styles.nameCategory }}>
        {nameCategory}
      </Text>

      <View style={styles.container}>
        <View style={styles.productList}>
          {renderProducts(allProducts, onSetChecked)}
        </View>

        <View style={styles.controlPanel}>
          <IconButton icon={<AddIcon color={color} />} borderColor={color} />
          <IconButton icon={<DeleteIcon />} borderColor={colors.DANGER}/>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  nameCategory: {
    fontSize: 12,
    textAlign: 'center',
    paddingBottom: 6,
    textTransform: 'uppercase',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: colors.SECONDARY,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
  },
  productList: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
  },
  controlPanel: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Card;
