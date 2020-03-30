import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

import Input from '../Input';
import colors from '../../constants/colors';
import ClassicButton from '../buttons/ClassicButton';
import ClassicButtonOutline from '../buttons/ClassicButtonOutline';


const FormAddProduct = (props) => {
  const {
    onCancel,
    onSave,
  } = props;

  const [nameNewProduct, setNameNewProduct] = useState('');

  return (
    <View style={styles.form}>
      <Input
        placeholder="Введите название продукта.."
        value={nameNewProduct}
        maxLength={50}
        onChange={text => setNameNewProduct(text)}
      />

      <View style={styles.controlPanel}>
        <ClassicButtonOutline
          style={styles.button}
          onPress={() => {
            onCancel();
          }}
        >
          <Text style={{ color: colors.PRIMARY, ...styles.nameButton }}>
            Отмена
          </Text>
        </ClassicButtonOutline>

        <ClassicButton
          disabled={(nameNewProduct.length === 0)}
          style={styles.button}
          onPress={() => {
            onSave(nameNewProduct);
            setNameNewProduct('');
          }}
        >
          <Text style={{ color: colors.SECONDARY, ...styles.nameButton }}>
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
  controlPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameButton: {
    fontSize: 15,
    textTransform: 'uppercase',
    marginRight: 5,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  button: {
    width: '48%',
  },
});

export default FormAddProduct;
