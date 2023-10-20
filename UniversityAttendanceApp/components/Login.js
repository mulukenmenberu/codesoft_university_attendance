import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Input, Button, Icon, Text, Overlay } from 'react-native-elements';
import { Card } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, resetState } from '../redux/reducers/authReducer';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const dispatch = useDispatch();
  const { userInfo, success, errorMessage } = useSelector((state) => state.user);

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
      setLoading(true);
      const data = {
        username: email,
        password: password,
      };
      dispatch(signIn(data));
    }
  };

  useEffect(() => {
    console.log(userInfo);
    if (userInfo.success === true) { // Check as a boolean, not a string
      // Hide loading spinner and show success alert
      setLoading(false);
      setTimeout(()=>{
        navigation.navigate('Dashboard')
      },1000)
      setShowSuccessAlert(true);
    } else if (errorMessage) {
      // Handle login error, e.g., show an error message
      setLoading(false);
  
    }
}, [userInfo, errorMessage]);

  const handleSuccessAlertClose = () => {
    // Close the success alert and navigate to the dashboard
    setShowSuccessAlert(false);
    // navigation.navigate('DashboardTabs');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Image source={require('../assets/logo.png')} style={styles.imagelogoMain} />
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
        <Button
          title="Login"
          onPress={handleLogin}
          buttonStyle={styles.login}
          titleStyle={{ fontSize: 17 }}
          disabled={loading}
          loading={loading}
        />
        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Register')}>
          <Text style={{ fontSize: 17 }}>Register</Text>
        </TouchableOpacity>
      </Card>
      <Overlay isVisible={showSuccessAlert} onBackdropPress={handleSuccessAlertClose}>
        <Text>Login Successful!</Text>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },

  register: {
    width: '100%',
    height: 40,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    justifyContent: 'center',
    borderColor: '#9FE2BF',
  },
  login: {
    width: '100%',
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9FE2BF',
  },
  card: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#fff',
  },
  imagelogoMain: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
});

export default Login;
