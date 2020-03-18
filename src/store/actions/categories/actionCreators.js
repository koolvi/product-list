import * as actionTypes from './actionTypes';

export const deleteCategory = idCategory => ({
  type: actionTypes.DELETE_CATEGORY,
  payload: idCategory,
});
