import * as actionTypes from './actionTypes';

export const setChecked = product => ({
  type: actionTypes.SET_PRODUCT_CHECKED,
  payload: product,
});

export const saveProduct = (idCategory, nameProduct) => ({
  type: actionTypes.SAVE_PRODUCT,
  payload: { idCategory, nameProduct },
});
