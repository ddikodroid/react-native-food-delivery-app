import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLOR} from '../constants/Color';
import {FONT} from '../constants/Typography';

const OrderButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Order Now</Text>
    </TouchableOpacity>
  );
};

export default OrderButton;

const styles = StyleSheet.create({
  button: {
    width: 100,
    padding: 7.5,
    backgroundColor: COLOR.red,
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    ...FONT.button,
    color: COLOR.white,
  },
});
