import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {FONT} from '../constants/Typography';

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={FONT.section}>Notification</Text>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
