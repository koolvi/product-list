import React, { useRef } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

// import Title from '../../common/components/Title';
import EmptyBlockCategory from './EmptyBlockCategory';
import Card from '../../common/components/Card/index';
import AddNewCategory from './AddNewCategory';
import DeleteAllCategories from './DeleteAllCategories';
import * as actionCreatorsThunkProducts from '../../store/actions/products/actionCreatorsThunk';
import * as actionCreatorsThunkCategories from '../../store/actions/categories/actionCreatorsThunk';

const MainScreen = (props) => {
  const {
    navigation,
    categories,
    products,
    onSetChecked,
    onDeleteCategory,
    onSaveProducts,
    onDeleteProduct,
    onDeleteAllCategories,
  } = props;

  const scrollViewRef = useRef(null);
  const contentOffsetRef = useRef(0);

  const handleConfirmDeleteCategory = category => {
    const { id, name } = category;
    navigation.navigate(
      "ConfirmDialog",
      {
        text: `Удалить категорию: ${name} ?`,
        onConfirm: () => onDeleteCategory(id),
      },
    );
  };

  const handleConfirmDeleteProduct = product => {
    navigation.navigate(
      "ConfirmDialog",
      {
        text: "Удалить продукт ?",
        onConfirm: () => onDeleteProduct(product),
      },
    );
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={styles.main}
      ref={scrollViewRef}
      onScroll={e => {
        contentOffsetRef.current = e.nativeEvent.contentOffset.y;
        console.log('contentOffsetRef.current=', contentOffsetRef.current);
      }}
    >
      {/* <Title /> */}

      {(categories.length === 0)
        ? <EmptyBlockCategory />
        : (
          categories.map(category => (
            <Card
              contentOffsetRef={contentOffsetRef}
              key={category.id}
              category={category}
              color={category.color}
              allProducts={products.filter(objProduct => category.id === objProduct.idCategory)}
              onSetChecked={onSetChecked}
              onDeleteCategory={handleConfirmDeleteCategory}
              onSaveNewProduct={onSaveProducts}
              onDeleteProduct={handleConfirmDeleteProduct}
              onScrollTo={params => scrollViewRef.current.scrollTo(params)}
            />))
        )
      }
      <AddNewCategory
        onPress={() => navigation.navigate("FormNewCategory")}
      />
      {(categories.length !== 0)
        ? (<DeleteAllCategories
            onPress={() => navigation.navigate("ConfirmDialog", { text: "Удалить все категории ?", onConfirm: onDeleteAllCategories })}
          />)
        : null
      }

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
  onSetChecked: actionCreatorsThunkProducts.setCheckedProductAsync,
  onDeleteCategory: actionCreatorsThunkCategories.deleteCategoryAsync,
  onDeleteAllCategories: actionCreatorsThunkCategories.deleteAllCategoriesAsync,
  onSaveProducts: actionCreatorsThunkProducts.saveProductsAsync,
  onDeleteProduct: actionCreatorsThunkProducts.deleteProductAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
