import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { Card } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { signUp, resetState } from '../redux/reducers/authReducer';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const dispatch = useDispatch();
  const { userInfo, loading, success, errorMessage } = useSelector((state) => state.user);

  
  useEffect(() => {
    if (userInfo.access_token) {
      // Registration success, handle navigation, e.g., go to the dashboard
      navigation.navigate('DashboardTabs');
    } else if (!success) {
      // Registration error, handle it
    }
  }, [success, userInfo]);

  const handleRegister = () => {
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!email) {
      setEmailError('Email is required');
    }
    if (!password) {
      setPasswordError('Password is required');
    }
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    }

    if (email && password && confirmPassword && password === confirmPassword) {
      // Perform registration logic
      // You can add your registration logic here
    const data  = {
        "username":email,
        "email":email,
        "password":"asdasd",
        "fullname":"asdsad",
        "role":"asd"
    }
      dispatch(signUp(data))

    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card} title="Registration">
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
        <Input
          placeholder="Confirm Password"
          leftIcon={<Icon name="lock" />}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
          errorMessage={confirmPasswordError}
        />
        <Button title="Register" onPress={handleRegister} />
        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontSize: 17 }}>Login</Text>
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
  },
  card: {
    borderRadius: 15,
    padding: 10,
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
    borderColor: 'green',
  },
});

export default Register;
