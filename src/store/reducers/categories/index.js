import * as actionTypes from '../../actions/categories/actionTypes';


const initialState = {
  categories: [
    { id: 0, name: "Овощи", color: "#DDBBFF" },
    { id: 1, name: "Фрукты", color: "#FFD88B" },
    { id: 2, name: "Молочка", color: "#87B7FF" },
  ],
};

const getCategories = (categories, idCategoryDel) => {
  const res = categories.filter(category => category.id !== idCategoryDel)
  return res;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_CATEGORY: return {
      ...state,
      categories: getCategories(state.categories, action.payload),
    };
    default: return state;
  }
};
