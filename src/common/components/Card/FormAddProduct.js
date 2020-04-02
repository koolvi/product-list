import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  Dimensions,
} from 'react-native';

import Input from '../Input';
import colors from '../../constants/colors';
import ClassicButton from '../buttons/ClassicButton';
import ClassicButtonOutline from '../buttons/ClassicButtonOutline';

const { height } = Dimensions.get('window');

const FormAddProduct = (props) => {
  const {
    contentOffsetRef,
    onCancel,
    onSave,
    onScrollTo,
  } = props;

  const [nameNewProduct, setNameNewProduct] = useState('');
  const buttonsContainerRef = useRef(null);
  const keyboardHeightRef = useRef(0);

  const correctScrollPosition = () => {
    const keyboardTopY = height - keyboardHeightRef.current;
    buttonsContainerRef.current.measure((fx, fy, width, height, px, py) => {
      const difference = py - keyboardTopY + 90;
      if(difference < 0) return;
      onScrollTo({
        y: contentOffsetRef.current + difference,
      });
    });
  };

  const handlePressSaveNewProduct = () => {
    onSave(nameNewProduct);
    setNameNewProduct('');
    setTimeout(() => {
      correctScrollPosition();
    }, 500);
  };

  const handleLayout = () => {
    setTimeout(() => {
      correctScrollPosition();
    }, 500);
  };

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', e => {
      keyboardHeightRef.current = e.endCoordinates.height;
    });
    const hideListener = Keyboard.addListener('keyboardDidHide', e => {
      keyboardHeightRef.current = 0;
    });
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <View style={styles.form}>
      <Input
        placeholder="Введите название продукта.."
        value={nameNewProduct}
        maxLength={50}
        onChange={text => setNameNewProduct(text)}
        onSubmitEditing={handlePressSaveNewProduct}
      />

      <View
        onLayout={handleLayout}
        ref={buttonsContainerRef}
        style={styles.controlPanel}
      >
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
          onPress={handlePressSaveNewProduct}
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
