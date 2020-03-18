import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Product from './Product';
import colors from '../../constants/colors';
import FormAddProduct from './FormAddProduct';
import IconButton from '../buttons/IconButton';
import AddIcon from '../buttons/icons/AddIcon';
import DeleteIcon from '../buttons/icons/DeleteIcon';


const renderProducts = (allProducts, onSetChecked) => {
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
    category,
    color,
    onSetChecked,
    onDeleteCategory,
    onSaveNewProduct,
  } = props;

  const [isShowForm, setShowForm] = useState(false);

  return (
    <>
      <Text style={{ color: color, ...styles.nameCategory }}>
        {category.name}
      </Text>

      <View style={styles.container}>
        <View style={styles.productList}>
          {renderProducts(allProducts, onSetChecked)}
          {isShowForm
            ? <FormAddProduct
              onCancel={() => setShowForm(false)}
              onSave={(name) => onSaveNewProduct(category.id, name)}
              />
            : null
          }
        </View>

        {isShowForm
          ? null
          : (
            <View style={styles.controlPanel}>
          <IconButton
            icon={<AddIcon color={color} />}
            borderColor={color}
            onPress={() => setShowForm(true)}
          />
          <IconButton
            icon={<DeleteIcon />}
            borderColor={colors.DANGER}
            marginBottom={15}
            onPress={() => onDeleteCategory(category.id)}
          />
        </View>
          )}
        
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
