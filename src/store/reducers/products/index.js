import * as actionTypes from '../../actions/products/actionTypes';


const initialState = {
  products: [
    { id: 0, idCategory: 0, checked: true, name: "Морковка, 2 шт" },
    { id: 1, idCategory: 0, checked: true, name: "Капуста белая, мал" },
    { id: 2, idCategory: 0, checked: true, name: "Луковичка, красный сорт" },
    { id: 3, idCategory: 0, checked: false, name: "Капуста" },
    { id: 4, idCategory: 1, checked: true, name: "Морковка, 2 шт" },
    { id: 5, idCategory: 1, checked: true, name: "Капуста белая, мал" },
    { id: 6, idCategory: 1, checked: true, name: "Луковичка, красный сорт" },
    { id: 7, idCategory: 2, checked: false, name: "Капуста" },
    { id: 8, idCategory: 2, checked: false, name: "Луковичка, красный сорт" },
  ],
};

const getProducts = (products, product) => {
  const newProduct = { ...product, checked: !product.checked };
  const index = products.indexOf(product);
  const head = products.slice(0, index);
  const tail = products.slice(index + 1);
  const res = [...head, newProduct, ...tail];
  return res;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_CHECKED: return {
      ...state,
      products: getProducts(state.products, action.payload),
    };
    // case actionTypes.ADD_CHAMBER: return {
    //   ...state,
    //   chambers: [...state.chambers, action.payload],
    // };
    
    // case actionTypes.DELETE_CHAMBER: return {
    //   ...state,
    //   chambers: deleteChamber(state.chambers, action.payload),
    // };

    default: return state;
  }
};
