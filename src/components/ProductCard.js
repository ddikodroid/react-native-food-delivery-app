import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONT} from '../constants/Typography';
import {COLOR} from '../constants/Color';

const ProductCard = ({title, subtitle, price, image, onPress, bestSeller}) => {
  return (
    <TouchableOpacity style={[styles.container, styles.shadow]}>
      {bestSeller ? (
        <View style={styles.bestSeller}>
          <Text>🔥</Text>
        </View>
      ) : null}
      <Image source={image} style={styles.image} resizeMode="contain" />
      <View style={styles.detail}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.currency}>$</Text>
          <Text style={FONT.price}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    margin: 20,
    marginRight: 0,
    padding: 10,
    borderRadius: 25,
  },
  shadow: {
    shadowColor: COLOR.gray,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 7.5,
    elevation: 5,
  },
  image: {
    width: 170,
    height: 170,
  },
  detail: {
    alignItems: 'center',
  },
  title: {
    ...FONT.contentTitle,
    marginBottom: 5,
  },
  subtitle: {
    ...FONT.contentText,
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  currency: {
    color: COLOR.red,
    ...FONT.price,
    fontSize: 16,
    marginRight: 2.5,
  },
  bestSeller: {
    width: 27.5,
    height: 27.5,
    backgroundColor: COLOR.lightGray[2],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12.5,
    position: 'absolute',
    right: 7.5,
    top: 7.5,
  },
});
