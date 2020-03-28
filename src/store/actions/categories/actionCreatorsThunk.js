import AsyncStorage from '@react-native-community/async-storage';
import * as actionCreators from './actionCreators';

export const saveCategoryAsync = nameNewCategory => {
  return (dispatch, getState) => {
    dispatch(actionCreators.saveCategory(nameNewCategory));
    const categoriesState = getState().categories;
    const categoriesStateStr = JSON.stringify(categoriesState);
    AsyncStorage.setItem('categories', categoriesStateStr);
  };
};

export const loadCategories = () => {
  return async (dispatch) => {
    const categoriesStr = await AsyncStorage.getItem('categories');
    const categoriesState = JSON.parse(categoriesStr);
    dispatch(actionCreators.setCategories(categoriesState.categories));
  };
};

export const deleteCategoryAsync = idCategoryDelete => {
  return (dispatch, getState) => {
    dispatch(actionCreators.deleteCategory(idCategoryDelete));
    const categoriesState = getState().categories;
    const categoriesStateStr = JSON.stringify(categoriesState);
    AsyncStorage.setItem('categories', categoriesStateStr);
    const productsState = getState().products;
    const productsStateStr = JSON.stringify(productsState);
    AsyncStorage.setItem('products', productsStateStr);
  };
};
