import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text,StatusBar, Image } from 'react-native';
import { Input, Button, Icon, Overlay } from 'react-native-elements';
import { Card } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { signUp, resetState } from '../redux/reducers/authReducer';

const Register = ({ navigation }) => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [loading, setLoading] = useState(false);



  
  const [role, setRole] = useState(1)
  const dispatch = useDispatch();
  const { userInfo, success, errorMessage } = useSelector((state) => state.user);

  const handleRole = (role)=>{
    setRole(role)
  }
  useEffect(() => {
    console.log(userInfo, " 000")
    if (userInfo.sucess =='true' || userInfo.sucess === true) { 
      setShowSuccessAlert(true);
      setLoading(false);
      setTimeout(()=>{
        navigation.navigate('Login');
      },3000)

    } else if (!success) {
      setLoading(false);


      // Registration error, handle it
    }
  }, [success, userInfo]);

  const handleRegister = () => {
    setEmailError('');
    setFullNameError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!fullname) {
      setFullNameError('Full Name is required');
    }
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

    if (fullname && email && password && confirmPassword && password === confirmPassword) {
      // Perform registration logic
      // You can add your registration logic here
      setLoading(true);

    const data  = {
        "username":email,
        "email":email,
        "password":"asdasd",
        "fullname":fullname,
        "role":role
    }
      dispatch(signUp(data))

    }
  };

  const handleSuccessAlertClose = () => {
    // Close the success alert and navigate to the dashboard
    setShowSuccessAlert(false);
    // navigation.navigate('DashboardTabs');
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
          placeholder="Full Name"
          leftIcon={<Icon name="person" />}
          value={fullname}
          onChangeText={(text) => setFullName(text)}
          errorMessage={emailError}
        />
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
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <TouchableOpacity style={role==1?styles.roleselected: styles.role} onPress={()=>handleRole('1')}>
          <Text style={role==1?styles.roleTextSelected: styles.roleText}>I'm a student</Text>
        </TouchableOpacity>
        <TouchableOpacity style={role==2?styles.roleselected: styles.role} onPress={()=>handleRole('2')}>
          <Text style={role==2?styles.roleTextSelected: styles.roleText}>I'm a teacher</Text>
        </TouchableOpacity>
        </View>


        {/* <TouchableOpacity style={styles.register} onPress={handleRegister}>
          <Text style={{ fontSize: 17 }}>Register</Text>
        </TouchableOpacity> */}
        <Button
          title="Register"
          onPress={handleRegister}
          buttonStyle={styles.register}
          titleStyle={{ fontSize: 17 }}
          disabled={loading}
          loading={loading}
        />

        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontSize: 17 }}>Login</Text>
        </TouchableOpacity>
      </Card>
      <Overlay isVisible={showSuccessAlert} onBackdropPress={handleSuccessAlertClose}>
        <Text>Registration Successful!</Text>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'#fff'
  },
  card: {
    borderRadius: 15,
    padding: 10,
    backgroundColor:'#ffff'
  },
  roleText:{
    fontSize:17,
    color:'#222'
  },
  roleTextSelected:{
    fontSize:17,
    color:'#fff'
  },
  login: {
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

  role: {
    width: '40%',
    height: 40,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    justifyContent: 'center',
    borderColor: '#008080',
  },

  roleselected: {
    width: '40%',
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008080',
  },
  register: {
    width: '100%',
    height: 40,
    marginTop: 10,
    // backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    // borderWidth: 2,
    justifyContent: 'center',
    backgroundColor: '#9FE2BF',
  },
  imagelogoMain: {
    width: "100%", // Set the width of the image
    height: 200, // Set the height of the image
    borderRadius:20
  },
});

export default Register;
