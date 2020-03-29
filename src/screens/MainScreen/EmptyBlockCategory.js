import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import IconNoFiles from './IconNoFiles';


const EmptyBlockCategory = () => {
  return (
  <View style={styles.container}>
    <IconNoFiles />
    <Text style={styles.text}>..пусто..</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: '#2b2b2b',
  },
});


export default EmptyBlockCategory;
