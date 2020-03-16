import { combineReducers } from 'redux';

import categoriesReducer from './reducers/categories';
import productsReducer from './reducers/products';

export default combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});
