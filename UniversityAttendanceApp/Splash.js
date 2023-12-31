import React, { Component } from 'react'; import {
  StyleSheet
  , View
  , Text,
  Pressable,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Splash = ({ navigation }) => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false}>


      <View style={styles.slide1}>
        <StatusBar backgroundColor='#fff' barStyle="dark-content" />
      
        <Image
          source={require('./assets/logo.png')} // Replace with the path to your image
          style={styles.imagelogoMain}
        />
        {/* <Image
          source={require('./assets/slogo.png')} // Replace with the path to your image
          style={styles.imagelogo}
        /> */}
        {/* <Text style={styles.text}> My Attendances  a place where you can manage your classroom presense </Text> */}
      </View>
      <View style={styles.slide2}>
      <Image
          source={require('./assets/logo.png')} // Replace with the path to your image
          style={styles.imagelogoMain}
        />
        <Text style={styles.text}>Students can mark attendances and manage thier presence</Text>
      </View>
      <View style={styles.slide3}>
      <Image
          source={require('./assets/logo.png')} // Replace with the path to your image
          style={styles.imagelogoMain}
        />
        <Text style={styles.text}>A teacher can manage course list and studnet presence</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            borderRadius: 70, // Set the borderRadius to half the desired width
            alignSelf: 'center',
            alignItems: 'center',
            width: 70, // Make sure the width and height are the same
            height: 70, // Make sure the width and height are the same
            backgroundColor: '#9FE2BF',
            marginTop: 20,
            justifyContent: 'center',
          }}
        >
          <AntDesign name='rightcircleo' size={40} color={'#fff'} />
        </TouchableOpacity>

      </View>
    </Swiper>
  );
}

export default Splash;
const styles = StyleSheet.create({
  wrapper: {
  },
  image: {
    width: "100%", // Set the width of the image
    height: 200, // Set the height of the image
    borderRadius:20,
    // borderColor: '#222',  // Border color
    // borderWidth: 1, 
  },
  imagelogo: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    borderRadius:200
  },
  imagelogoMain: {
    width: "100%", // Set the width of the image
    height: 200, // Set the height of the image
    borderRadius:20
  },
  slide1: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    color: '#222', fontSize: 19, fontWeight: 'bold',marginTop:20,paddingLeft:10, paddingRight:10
  },
  textHead: {
    color: '#222', fontSize: 25, fontWeight: 'bold',marginBottom:50
  }
});