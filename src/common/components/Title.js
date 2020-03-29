import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import colors from '../constants/colors';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        My Product List
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.PRIMARY,
    marginBottom: 20,
  },
  title: {
    marginLeft: 20,
    fontSize: 25,
    color: colors.SECONDARY,
    fontWeight: 'bold',
  },
});

export default Title;
