import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';

import ClassicButton from '../common/components/buttons/ClassicButton';
import colors from '../common/constants/colors';
import * as actionCreatorsThunk from '../store/actions/categories/actionCreatorsThunk';


const FormNewCategory = (props) => {
  const { navigation, onSaveCategoryAsync } = props;
  const [nameNewCategory, setNameNewCategory] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={text => setNameNewCategory(text)}
          value={nameNewCategory}
          placeholder="Введите название.."
          placeholderTextColor={colors.SELECTED}
          autoFocus
        />

        <View style={styles.containerButton}>
          <ClassicButton
            style={styles.button}
            onPress={() => {
              onSaveCategoryAsync(nameNewCategory);
              navigation.goBack();
            }}
          >
            <Text style={styles.nameButton}>
              Добавить
            </Text>
            <Text style={styles.nameButton}>
              категорию
            </Text>
          </ClassicButton>
        </View>

        <TouchableOpacity
          style={styles.containerButtonCancel}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.nameButton}>Отменить</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
  },
  form: {
    alignItems: 'center',
    backgroundColor: colors.SECONDARY,
    borderRadius: 10,
    borderColor: colors.SELECTED,
    borderWidth: 1,
    margin: 25,
    padding: 25,
  },
  input: {
    textAlign: 'center',
    height: 50,
    width: '100%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
  },
  containerButton: {
    marginTop: 20,
    width: '100%',
  },
  containerButtonCancel: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '45%',
    height: 40,
  },
  nameButton: {
    fontSize: 15,
    color: colors.PRIMARY,
    textTransform: 'uppercase',
    marginRight: 5,
    marginLeft: 5,
  },
  button: {
    borderRadius: 50,
    width: '100%',
    height: 50,
  },
});

const mapDispatchToProps = {
  onSaveCategoryAsync: actionCreatorsThunk.saveCategoryAsync,
};

export default connect(null, mapDispatchToProps)(FormNewCategory);