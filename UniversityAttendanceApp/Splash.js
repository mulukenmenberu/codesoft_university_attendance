import React, { Component } from 'react'; import {
  StyleSheet
  , View
  , Text,
  Pressable,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
const Splash = ({navigation}) => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Welcome to Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>You are beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>You are amazing</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ borderRadius: 20, alignSelf: 'center', alignItems: 'center', width: 200, height: 50, color: '#fff', backgroundColor: '#087AFC', marginTop: 20, justifyContent: 'center' }}>
        <Text style={{ justifyContent: 'center', fontSize: 20, color: '#fff' }}>Continue</Text>
      </TouchableOpacity>
      </View>
    </Swiper>
  );
}

export default Splash;
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#caff75'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffa73'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#6cf5d9'
  },
  text: {
    color: '#6e596d', fontSize: 25, fontWeight: 'bold'
  }
});