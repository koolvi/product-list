import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import ClassicButton from '../common/components/buttons/ClassicButton';
import ClassicButtonOutline from '../common/components/buttons/ClassicButtonOutline';
import colors from '../common/constants/colors';


const ConfirmDialog = (props) => {
  const { navigation, route } = props;
  const { text, onConfirm } = route.params;

  return (
    <View style={styles.outsideContainer}>
      <View style={styles.container}>
        
        <Text style={styles.text}>
          {text}
        </Text>

        <View style={styles.controlPanel}>
          <ClassicButtonOutline
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ color: colors.PRIMARY, ...styles.nameButton }}>
              Нет
            </Text>
          </ClassicButtonOutline>

          <ClassicButton
            style={styles.button}
            onPress={() => {
              onConfirm();
              navigation.goBack();
            }}
          >
            <Text style={{ color: colors.SECONDARY, ...styles.nameButton }}>
              Да, удалить
            </Text>
          </ClassicButton>
        </View>

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
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    paddingTop: 20,
  },
  text: {
    lineHeight: 35,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  controlPanel: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
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

export default ConfirmDialog;
