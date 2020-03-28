import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

import Title from '../../common/components/Title';
import EmptyBlockCategory from './EmptyBlockCategory';
import Card from '../../common/components/Card/index';
import AddNewCategory from './AddNewCategory';
import * as actionCreatorsThunkProducts from '../../store/actions/products/actionCreatorsThunk';
import * as actionCreatorsThunkCategories from '../../store/actions/categories/actionCreatorsThunk';
import * as actionCreatorsProducts from '../../store/actions/products/actionCreators';
// import * as actionCreatorsCategories from '../../store/actions/categories/actionCreators';

const MainScreen = (props) => {
  const {
    navigation,
    categories,
    products,
    onSetChecked,
    onDeleteCategory,
    onSaveProducts,
  } = props;

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.main}>
      <Title />

      {(categories.length === 0)
        ? <EmptyBlockCategory />
        : (
          categories.map(category => (
            <Card
              key={category.id}
              category={category}
              color={category.color}
              allProducts={products.filter(objProduct => category.id === objProduct.idCategory)}
              onSetChecked={onSetChecked}
              onDeleteCategory={onDeleteCategory}
              onSaveNewProduct={onSaveProducts}
            />))
        )
      }
      <AddNewCategory onPress={() => navigation.navigate("FormNewCategory")}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
  },
});

const mapStateToProps = state => ({
  categories: state.categories.categories,
  products: state.products.products,
});

const mapDispatchToProps = {
  onSetChecked: actionCreatorsProducts.setChecked,
  onDeleteCategory: actionCreatorsThunkCategories.deleteCategoryAsync,
  onSaveProducts: actionCreatorsThunkProducts.saveProductsAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
