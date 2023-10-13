import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Card, Icon, Text } from 'react-native-elements';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

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
    }
  };

  return (
    <View style={styles.container}>
      <Card title="Registration">
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
});

export default Register;
