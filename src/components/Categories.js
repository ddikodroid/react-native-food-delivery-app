/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {FONT} from '../constants/Typography';
import {COLOR} from '../constants/Color';
import {categories} from '../contents/Categories';
import {WIDTH} from '../constants/Dimension';
import CategoryButton from './CategoryButton';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  console.log(selectedCategory);
  const renderCategories = ({item, index}) => {
    return (
      <CategoryButton
        icon={item.icon}
        name={item.name}
        selected={selectedCategory === item.name}
        onPress={() => setSelectedCategory(item.name)}
        buttonStyle={{marginLeft: index === 0 ? 20 : 0}}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategories}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: WIDTH,
    paddingVertical: 10,
  },
  sectionTitle: {
    ...FONT.contentTitle,
    color: COLOR.black,
    paddingLeft: 20,
  },
});
