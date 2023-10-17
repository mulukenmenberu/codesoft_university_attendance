import React, { Component } from 'react'; import {
  StyleSheet
  , View
  , Text,
  Pressable,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
        <TouchableOpacity
  onPress={() => navigation.navigate('Login')}
  style={{
    borderRadius: 70, // Set the borderRadius to half the desired width
    alignSelf: 'center',
    alignItems: 'center',
    width: 70, // Make sure the width and height are the same
    height: 70, // Make sure the width and height are the same
    backgroundColor: '#087AFC',
    marginTop: 20,
    justifyContent: 'center',
  }}
>
  <AntDesign name='rightcircleo' size={40} color={'#fff'}/>
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
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#1B2631'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#1B2631'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#1B2631'
  },
  text: {
    color: '#6e596d', fontSize: 25, fontWeight: 'bold'
  }
});