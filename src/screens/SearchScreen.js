import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {FONT} from '../constants/Typography';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={FONT.section}>Search</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
