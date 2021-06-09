import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {FONT} from '../constants/Typography';
import {COLOR} from '../constants/Color';
import {WIDTH} from '../constants/Dimension';

const ProductCard = ({title, subtitle, price, image, onPress, bestSeller}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, styles.shadow]}>
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
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    margin: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    width: WIDTH * 0.475,
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
    width: 150,
    height: 150,
  },
  detail: {
    alignItems: 'center',
  },
  title: {
    ...FONT.contentTitle,
    marginBottom: 5,
    textAlign: 'center',
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
