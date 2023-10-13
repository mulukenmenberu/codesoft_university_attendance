import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './Splash'
import Dashboard from './components/Dashboard'
import Tabs from './components/Tabs'
import Login from './components/Login'
import Register from './components/Register'
const Navigation = () => {
    const stack = createNativeStackNavigator()
  return (
<stack.Navigator screenOptions={{headerShown:false}}>
    <stack.Screen name="Splash" component={Splash}/>
    <stack.Screen name="Dashboard" component={Dashboard}/>
    <stack.Screen name="Tabs" component={Tabs}/>
    <stack.Screen name="Login" component={Login}/>
    <stack.Screen name="Register" component={Register}/>
</stack.Navigator>
  )
}

export default Navigation