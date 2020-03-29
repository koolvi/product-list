import AsyncStorage from '@react-native-community/async-storage';
import * as actionCreators from './actionCreators';

export const saveProductsAsync = (idCategory, nameNewProduct) => {
  return (dispatch, getState) => {
    dispatch(actionCreators.saveProduct(idCategory, nameNewProduct));
    const productsState = getState().products;
    const productsStateStr = JSON.stringify(productsState);
    AsyncStorage.setItem('products', productsStateStr);
  };
};

export const setCheckedProductAsync = (product) => {
  return (dispatch, getState) => {
    dispatch(actionCreators.setChecked(product));
    const productsState = getState().products;
    const productsStateStr = JSON.stringify(productsState);
    AsyncStorage.setItem('products', productsStateStr);
  };
};

export const loadProducts = () => {
  return async (dispatch) => {
    const productsStr = await AsyncStorage.getItem('products');
    const productsState = JSON.parse(productsStr);
    dispatch(actionCreators.setProducts(productsState.products));
  };
};

export const deleteProductAsync = (product) => {
  return (dispatch, getState) => {
    dispatch(actionCreators.deleteProduct(product));
    const productsState = getState().products;
    const productsStateStr = JSON.stringify(productsState);
    AsyncStorage.setItem('products', productsStateStr);
  };
};
