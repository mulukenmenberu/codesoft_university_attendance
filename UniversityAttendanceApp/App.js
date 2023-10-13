// import { StatusBar } from 'expo-status-bar';
import {Image, StatusBar,StyleSheet, Text, View, Platform, StatusBar as stbar, Dimensions, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
const hheight = Dimensions.get('screen').height
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
<Navigation/>
<StatusBar style="auto" />

    </NavigationContainer>
  );
}

