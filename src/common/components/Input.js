import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';


const Input = (props) => {
  const {
    value,
    placeholder,
    maxLength,
    onChange,
  } = props;

  return (
    <TextInput
      style={styles.input}
      maxLength={maxLength}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      placeholderTextColor="#838383"
      autoFocus
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#505050',
    borderColor: '#838383',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    fontSize: 16,
    textAlign: 'center',
    height: 50,
    width: '100%',
    paddingRight: 20,
  },
});

export default Input;
