import React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Header from '../components/Header';
import {COLOR} from '../constants/Color';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import PopularNow from '../components/PopularNow';
import {home} from '../contents/Home';
import {WIDTH} from '../constants/Dimension';

const HomeScreen = () => {
  const renderHome = ({item}) => {
    switch (item.content) {
      case 'banner':
        return <Banner key={item.id} />;
      case 'categories':
        return <Categories key={item.id} />;
      case 'popular':
        return <PopularNow key={item.id} />;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={home}
        renderItem={renderHome}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR.white,
  },
  contentContainer: {
    width: WIDTH,
  },
});
