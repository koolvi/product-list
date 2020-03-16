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
import * as actionCreatorsProducts from '../../store/actions/products/actionCreators';

const MainScreen = (props) => {
  const { categories, products, onSetChecked } = props;

  return (
    <ScrollView style={styles.main}>
      <Title />

      {(categories.length === 0)
        ? <EmptyBlockCategory />
        : (
          categories.map(category => (
            <Card
              key={category.id}
              nameCategory={category.name}
              color={category.color}
              allProducts={products.filter(objProduct => category.id === objProduct.idCategory)}
              onSetChecked={onSetChecked}
            />))
        )
      }
      <AddNewCategory />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
