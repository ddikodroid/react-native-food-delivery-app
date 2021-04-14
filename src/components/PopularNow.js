import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WIDTH} from '../constants/Dimension';
import {FONT} from '../constants/Typography';
import {COLOR} from '../constants/Color';
import Feather from 'react-native-vector-icons/Feather';
import ProductCard from './ProductCard';
import {popularNow} from '../contents/PopularNow';
const PopularNow = () => {
  const renderPopularNow = ({item}) => {
    return (
      <ProductCard
        title={item.title}
        subtitle={item.subtitle}
        price={item.price}
        image={item.image}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Now</Text>
        <TouchableOpacity style={styles.viewAllContainer}>
          <Text style={styles.viewAllText}>View All</Text>
          <View style={styles.iconContainer}>
            <Feather name="chevron-right" size={15} color={COLOR.white} />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={popularNow}
        renderItem={renderPopularNow}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularNow;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WIDTH,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    ...FONT.contentTitle,
    color: COLOR.black,
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 90,
  },
  viewAllText: {
    ...FONT.contentText,
    fontWeight: '600',
    color: COLOR.darkYellow,
  },
  iconContainer: {
    backgroundColor: COLOR.darkYellow,
    borderRadius: 5,
  },
});
