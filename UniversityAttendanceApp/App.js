// import { StatusBar } from 'expo-status-bar';
import { Image, StatusBar, StyleSheet, Text, View, Platform, StatusBar as stbar, Dimensions, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
const hheight = Dimensions.get('screen').height
import Navigation from './Navigation';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <PaperProvider>

    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
    </PaperProvider>

  );
}

