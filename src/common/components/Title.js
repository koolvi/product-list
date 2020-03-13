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
        Product list
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    justifyContent: 'center',
  },
  title: {
    marginLeft: 40,
    fontSize: 40,
    color: colors.PRIMARY,
    fontWeight: 'bold',
  },
});

export default Title;
