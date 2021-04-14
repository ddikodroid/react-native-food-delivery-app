import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../constants/Color';
import {FONT} from '../constants/Typography';
import OrderButton from './OrderButton';
import {WIDTH} from '../constants/Dimension';

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <View style={styles.center}>
          <View style={styles.text}>
            <Text style={FONT.contentTitle}>The Fastest In</Text>
            <Text style={FONT.contentTitle}>
              Delivery <Text style={styles.red}>Food</Text>
            </Text>
          </View>
          <OrderButton />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/delivery.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bannerContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR.yellow,
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  text: {
    height: 50,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  red: {
    color: COLOR.red,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  image: {
    width: 120,
    height: 120,
  },
  imageContainer: {
    justifyContent: 'flex-end',
    paddingRight: 25,
  },
});
