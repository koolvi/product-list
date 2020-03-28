import React, { useEffect } from 'react';
import {
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';

import backgroundImg from './MPL-background.png';
import * as actionCreatorsThunkCategories from '../../store/actions/categories/actionCreatorsThunk';
import * as actionCreatorsThunkProducts from '../../store/actions/products/actionCreatorsThunk';


const SplashScreen = (props) => {
  const {
    navigation,
    onLoadCategories,
    onLoadProducts,
  } = props;

  useEffect(() => {
    onLoadCategories();
    onLoadProducts();
    setTimeout(() => {
      navigation.replace("Main")
    }, 1000);
  }, []);

  return (
    <ImageBackground
      source={backgroundImg}
      style={{width: '100%', height: '100%'}}
    />
  );
};


const mapDispatchToProps = {
  onLoadCategories: actionCreatorsThunkCategories.loadCategories,
  onLoadProducts: actionCreatorsThunkProducts.loadProducts,
};

export default connect(null, mapDispatchToProps)(SplashScreen);
