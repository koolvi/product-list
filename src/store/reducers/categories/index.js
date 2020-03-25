import * as actionTypes from '../../actions/categories/actionTypes';


const initialState = {
  categories: [
    { id: 0, name: "Овощи", color: "#7a7fff" },
    { id: 1, name: "Фрукты", color: "#36ffc3" },
    { id: 2, name: "Молочка", color: "#ff9373" },
  ],
};

const getCategories = (categories, idCategoryDel) => {
  const res = categories.filter(category => category.id !== idCategoryDel)
  return res;
};

const getColorNewCategory = (categories) => {
  const colorPalette = [
    "#7a7fff", // синий
    "#36ffc3", // зеленый
    "#ff9373", // оранжевый
    "#ae70ff", // фиолетовый
    "#15ff00", // салатовый
    "#ff6bc4", // розовый
    "#cf0", // желтый
  ];

  if(categories.length === 0){
    return colorPalette[0];
  }
  const colorLastCategory = categories[categories.length - 1].color;
  const indexInPaletteThisColor = colorPalette.indexOf(colorLastCategory);
  const indexInPaletteLastColor = colorPalette.length - 1;
  const indexNewColor = indexInPaletteThisColor + 1;
  const res = (indexInPaletteThisColor === indexInPaletteLastColor) ? colorPalette[0] : colorPalette[indexNewColor];
  return res;
};

const getCategoriesAfterSave = (categories, nameNewCategory) => {
  const idNewCategory = (categories.length === 0) ? 0 : categories[categories.length - 1].id + 1;
  const color = getColorNewCategory(categories);
  const newCategory = { id: idNewCategory, name: nameNewCategory, color: color };
  const res = [...categories, newCategory];
  return res;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_CATEGORY: return {
      ...state,
      categories: getCategories(state.categories, action.payload),
    };
    case actionTypes.SAVE_CATEGORY: return {
      ...state,
      categories: getCategoriesAfterSave(state.categories, action.payload),
    };
    default: return state;
  }
};
