import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONT} from '../constants/Typography';
import {categories} from '../contents/Categories';
import {COLOR} from '../constants/Color';

const CategoryButton = ({icon, name, selected, onPress, buttonStyle}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: selected ? COLOR.red : COLOR.lightGray[2],
      }}
      onPress={onPress}>
      <View
        style={{
          ...styles.iconContainer,
          backgroundColor: selected ? COLOR.white : COLOR.lightGray[2],
        }}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text
          style={{...styles.name, color: selected ? COLOR.white : COLOR.black}}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
    justifyContent: 'space-between',
    marginTop: 15,
    marginRight: 10,
  },
  icon: {
    fontSize: 14,
  },
  iconContainer: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    ...FONT.category,
  },
  nameContainer: {
    width: 90,
    alignItems: 'center',
  },
});
