import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


const EmptyBlockCategory = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.text}>..пусто..</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  text: {
    fontSize: 20,
    color: '#2b2b2b',
  },
});


export default EmptyBlockCategory;
