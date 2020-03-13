import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import Title from '../../common/components/Title';
import Card from '../../common/components/Card/index';
import AddNewCategory from './AddNewCategory';

const MainScreen = () => {
  return (
    <ScrollView style={styles.main}>
      <Title />

      <Card
        nameCategory="Молочка"
        color="#DDBBFF"
        allProducts={[
          { id: 0, checked: false, name: "Морковка, 2 шт" },
          { id: 1, checked: false, name: "Капуста белая, мал" },
          { id: 2, checked: true, name: "Луковичка, красный сорт" },
          { id: 3, checked: false, name: "Капуста" },
        ]}
      />
      <Card
        nameCategory="Овощи, фрукты"
        color="#FFD88B"
        allProducts={[
          { id: 0, checked: true, name: "Морковка, 2 шт" },
          { id: 1, checked: true, name: "Капуста белая, мал" },
          { id: 2, checked: true, name: "Луковичка, красный сорт" },
          { id: 3, checked: false, name: "Капуста" },
        ]}
      />
      <Card
        nameCategory="Мясо"
        color="#87B7FF"
        allProducts={[
          { id: 0, checked: false, name: "Морковка, 2 шт" },
          { id: 1, checked: true, name: "Капуста белая, мал" },
          { id: 2, checked: true, name: "Луковичка, красный сорт" },
          { id: 3, checked: false, name: "Капуста" },
        ]}
      />

      <AddNewCategory />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
  },
});

export default MainScreen;
