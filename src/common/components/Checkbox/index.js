import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


import CheckboxIcon from './icons/CheckboxIcon';
import CheckboxOutlineIcon from './icons/CheckboxOutlineIcon';


const Checkbox = (props) => {
  const { value } = props;

  if (value) return (
    <View style={styles.container} >
      <CheckboxIcon style={styles.checkbox} />
    </View>
  )
    return (
    <View style={styles.container} >
      <CheckboxOutlineIcon />
    </View>
    )
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Checkbox;
