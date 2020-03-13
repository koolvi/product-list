import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import Title from '../../common/components/Title';
import ClassicButton from '../../common/components/buttons/ClassicButton';
import Card from '../../common/components/Card/index';

const MainScreen = () => {
  return (
    <ScrollView style={styles.main}>
      <Title />

      <Card nameCategory="Молочка" color="#DDBBFF" />
      <Card nameCategory="Овощи, фрукты" color="#FFD88B" />
      <Card nameCategory="Мясо" color="#87B7FF" />
      <Card nameCategory="Прочее" color="#9AFF8B" />

      <View style={styles.containerButton}>
        <ClassicButton />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
  },
  containerButton: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 80,
  },
});

export default MainScreen;
