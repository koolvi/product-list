import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

import colors from '../../constants/colors';
import ClassicButton from '../buttons/ClassicButton';


const FormAddProduct = (props) => {
  const {
    onCancel,
    onSave,
  } = props;

  const [nameNewProduct, setNameNewProduct] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        onChangeText={text => setNameNewProduct(text)}
        value={nameNewProduct}
        placeholder="Введите название продукта.."
        placeholderTextColor={colors.SELECTED}
        autoFocus
      />
      <View style={styles.controlPanel}>
        <ClassicButton
          styleButton={{
            borderRadiusButton: 50,
            widthButton: '48%',
            heightButton: 50,
          }}
          onPress={() => {
            onCancel();
            setNameNewProduct('');
          }}
        >
          <Text style={styles.nameButton}>
            Отмена
          </Text>
        </ClassicButton>

        <ClassicButton
          styleButton={{
            borderRadiusButton: 50,
            widthButton: '48%',
            heightButton: 50,
          }}
          onPress={() => {
            onSave(nameNewProduct);
            setNameNewProduct('');
            onCancel();
          }}
        >
          <Text style={styles.nameButton}>
            Добавить
          </Text>
        </ClassicButton>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    fontSize: 18,
  },
  controlPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  nameButton: {
    fontSize: 15,
    color: colors.PRIMARY,
    textTransform: 'uppercase',
    marginRight: 5,
    marginLeft: 5,
  },
});

export default FormAddProduct;