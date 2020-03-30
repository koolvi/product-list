import * as actionTypes from '../../actions/products/actionTypes';
import * as actionTypesCategories from '../../actions/categories/actionTypes';


const initialState = {
  products: [],
};

const getProducts = (products, product) => {
  const newProduct = { ...product, checked: !product.checked };
  const index = products.indexOf(product);
  const head = products.slice(0, index);
  const tail = products.slice(index + 1);
  const res = [...head, newProduct, ...tail];
  return res;
};

const getProductsAfterDelete = (products, idCategoryDelete) => {
  const res = products.filter(product => product.idCategory !== idCategoryDelete);
  return res;
};

const getProductsAfterSaveProduct = (products, payload) => {
  const { idCategory, nameProduct } = payload;
  const idNewProduct = (products.length === 0) ? 0 : products[products.length - 1].id + 1;
  const newProduct = { id: idNewProduct, idCategory: idCategory, checked: false, name: nameProduct };
  const res = [...products, newProduct];
  return res;
};

const getProductsAfterDeleteProduct = (products, deleteProduct) => {
  const res = products.filter(product => product.id !== deleteProduct.id);
  return res;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_CHECKED: return {
      ...state,
      products: getProducts(state.products, action.payload),
    };
    case actionTypesCategories.DELETE_CATEGORY: return {
      ...state,
      products: getProductsAfterDelete(state.products, action.payload),
    };
    case actionTypes.SAVE_PRODUCT: return {
      ...state,
      products: getProductsAfterSaveProduct(state.products, action.payload),
    };
    case actionTypes.SET_PRODUCTS: return {
      ...state,
      products: action.payload,
    };
    case actionTypes.DELETE_PRODUCT: return {
      ...state,
      products: getProductsAfterDeleteProduct(state.products, action.payload),
    };
    case actionTypesCategories.DELETE_ALL_CATEGORIES: return {
      ...state,
      products: [],
    };
    default: return state;
  }
};
