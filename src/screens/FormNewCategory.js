import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import Input from '../common/components/Input';
import ClassicButton from '../common/components/buttons/ClassicButton';
import ClassicButtonOutline from '../common/components/buttons/ClassicButtonOutline';
import colors from '../common/constants/colors';
import * as actionCreatorsThunk from '../store/actions/categories/actionCreatorsThunk';


const FormNewCategory = (props) => {
  const { navigation, onSaveCategoryAsync } = props;
  const [nameNewCategory, setNameNewCategory] = useState('');

  return (
    <View style={styles.outsideContainer}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.nameTitle}>
            Новая категория
          </Text>
        </View>

        <Input
          placeholder="Введите название.."
          value={nameNewCategory}
          maxLength={12}
          onChange={text => setNameNewCategory(text)}
          onSubmitEditing={() => {
            onSaveCategoryAsync(nameNewCategory);
            navigation.goBack();
          }}
        />

        <Text style={styles.hint}>
          * не больше 12 символов
        </Text>

        <ClassicButton
          disabled={(nameNewCategory.length === 0)}
          style={styles.button}
          onPress={() => {
            onSaveCategoryAsync(nameNewCategory);
            navigation.goBack();
          }}
        >
          <Text style={{ color: colors.SECONDARY, ...styles.nameButton }}>
            Добавить
          </Text>
          <Text style={{ color: colors.SECONDARY, ...styles.nameButton }}>
            категорию
          </Text>
        </ClassicButton>

        <ClassicButtonOutline
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ color: colors.PRIMARY, ...styles.nameButton }}>
            Отменить
          </Text>
        </ClassicButtonOutline>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.SECONDARY,
    borderRadius: 10,
    borderColor: colors.SELECTED,
    borderWidth: 1,
    margin: 25,
    padding: 25,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
  },
  nameTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.PRIMARY,
    fontSize: 25,
  },
  hint: {
    color: colors.SELECTED,
    fontSize: 12,
  },
  button: {
    width: '100%',
    marginTop: 20,
  },
  nameButton: {
    textTransform: 'uppercase',
    marginRight: 5,
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

const mapDispatchToProps = {
  onSaveCategoryAsync: actionCreatorsThunk.saveCategoryAsync,
};

export default connect(null, mapDispatchToProps)(FormNewCategory);
