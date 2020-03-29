import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import IconButton from '../buttons/IconButton';
import DeleteIcon from '../buttons/icons/DeleteIcon';


const Header = (props) => {
  const {
    colorContainer,
    nameCategory,
    onPress,
  } = props;

  return (
    <View style={{ backgroundColor: colorContainer, ...styles.container}}>
      <Text style={styles.nameCategory }>
        {nameCategory}
      </Text>

      <IconButton
        icon={<DeleteIcon />}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '60%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 20,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 10,
  },
  nameCategory: {
    fontSize: 20,
    fontWeight: 'bold',   
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default Header;
