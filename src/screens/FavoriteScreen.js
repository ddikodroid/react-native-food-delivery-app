import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {FONT} from '../constants/Typography';

const FavoriteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={FONT.section}>Favorites</Text>
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
