import * as actionTypes from './actionTypes';

export const deleteCategory = idCategory => ({
  type: actionTypes.DELETE_CATEGORY,
  payload: idCategory,
});

export const saveCategory = nameNewCategory => {
  return {
    type: actionTypes.SAVE_CATEGORY,
    payload: nameNewCategory,
  };
};

// функция, которая кладет массив категорий из AssyncStorage в store
export const setCategories = categories => {
  return {
    type: actionTypes.SET_CATEGORIES,
    payload: categories,
  };
};

export const deleteAllCategories = () => {
  return {
    type: actionTypes.DELETE_ALL_CATEGORIES,
  };
};