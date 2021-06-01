import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {FONT} from '../constants/Typography';

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={FONT.section}>Cart</Text>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
