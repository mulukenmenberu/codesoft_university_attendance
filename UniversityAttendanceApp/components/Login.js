import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Input, Button, Icon, Text } from 'react-native-elements';
import { Card } from 'react-native-paper';
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required');
    }
    if (!password) {
      setPasswordError('Password is required');
    }

    if (email && password) {
      // Perform login logic
      // You can add your authentication logic here
      navigation.navigate('Tabs')
    }
  };

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#fff' barStyle="dark-content" />
        <Image
          source={require('../assets/logo.png')} // Replace with the path to your image
          style={styles.imagelogoMain}
        />
      <Card style={styles.card}>
        <Input
          placeholder="Email"
          leftIcon={<Icon name="email" />}
          value={email}
          onChangeText={(text) => setEmail(text)}
          errorMessage={emailError}
        />
        <Input
          placeholder="Password"
          leftIcon={<Icon name="lock" />}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          errorMessage={passwordError}
        />
        <TouchableOpacity  style = {styles.login} onPress={handleLogin} >
          <Text style={{fontSize:17, }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity  style = {styles.register} onPress={()=>navigation.navigate('Register')} >
          <Text style={{fontSize:17, }}>Register</Text>
        </TouchableOpacity>
        
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },

  register : {
    width:"100%",
    height:40,
    marginTop:10,
    backgroundColor:'#fff',
    borderRadius:10,
    alignItems:'center',
    borderWidth:2,
    justifyContent:'center',
    borderColor:'#9FE2BF'

  },
  login : {
    width:"100%",
    height:40,
    marginTop:10,
    // backgroundColor:'#fff',
    borderRadius:10,
    alignItems:'center',
    // borderWidth:2,
    justifyContent:'center',
    backgroundColor:'#9FE2BF'

  },
  card:{
    borderRadius:15,
    padding:10,
    backgroundColor:'#fff'

  },
  imagelogoMain: {
    width: "100%", // Set the width of the image
    height: 200, // Set the height of the image
    borderRadius:20
  },
});

export default Login;
