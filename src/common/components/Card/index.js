import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Header from './Header';
import Product from './Product';
import colors from '../../constants/colors';
import FormAddProduct from './FormAddProduct';
import CircleButton from '../buttons/CircleButton';
import AddIcon from '../buttons/icons/AddIcon';


const renderProducts = (allProducts, onSetChecked, onDeleteProduct) => {
  return allProducts.map(product => (
    <Product
      key={product.id}
      product={product}
      onSetChecked={onSetChecked}
      onDelete={onDeleteProduct}
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
    onDeleteProduct,
  } = props;

  const [isShowForm, setShowForm] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Header
        colorContainer={color}
        nameCategory={category.name}
        onPress={() => onDeleteCategory(category.id)}
      />

      <View style={styles.container}>
        <View style={styles.productList}>
          {((allProducts.length === 0) && (!isShowForm))
            ? (
              <View style={styles.emptyCard}>
                <Text style={styles.textEmptyCard}>...в этой категории ничего нет...</Text>
              </View>
            ) : (
              <>
                {renderProducts(allProducts, onSetChecked, onDeleteProduct)}
              </>
            )
          }

          {(isShowForm)
            ? (<FormAddProduct
                onCancel={() => setShowForm(false)}
                onSave={(name) => onSaveNewProduct(category.id, name)}
              />)
              : null
          }
        </View>
      </View>

      {(isShowForm)
      ? null
      : (
        <View style={styles.controlPanel}>
        <CircleButton
          icon={<AddIcon />}
          backgroundColor={color}
          onPress={() => setShowForm(true)}
        />
      </View>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
  },
  container: {
    marginTop: 40,
    flexDirection: 'row',
    backgroundColor: colors.SECONDARY,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 25,
  },
  productList: {
    marginTop: 10,
    marginBottom: 35,
    flex: 1,
  },
  controlPanel: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  emptyCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 20,
  },
  textEmptyCard: {
    fontSize: 15,
    color: colors.SELECTED,
  },
});

export default Card;
