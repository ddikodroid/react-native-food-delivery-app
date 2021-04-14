import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {COLOR} from '../constants/Color';
import {FONT} from '../constants/Typography';
import {WIDTH} from '../constants/Dimension';

const Header = () => {
  return (
    <View style={[styles.row, styles.spacer]}>
      <TouchableOpacity style={styles.menu}>
        <FontAwesome5 name="hamburger" size={22} color={COLOR.red} />
      </TouchableOpacity>
      <View style={styles.location}>
        <Feather name="map-pin" size={18} color={COLOR.red} />
        <Text style={styles.locationText}>Yogyakarta, ID</Text>
        <Feather name="chevron-down" size={18} color={COLOR.red} />
      </View>
      <View>
        <TouchableOpacity style={styles.avatarContainer}>
          <Image
            source={require('../assets/images/avatar.png')}
            style={styles.avatar}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: COLOR.lightGray[2],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7.5,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    ...FONT.location,
    marginHorizontal: 5,
  },
  spacer: {
    justifyContent: 'space-between',
    width: WIDTH,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 30,
    height: 30,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLOR.lightGray[2],
    borderRadius: 7.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
