import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './Splash'
import Dashboard from './components/Dashboard'
import Tabs from './components/Tabs'
import TabsTeacher from './components/TabsTeacher'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
const Navigation = () => {
    const stack = createNativeStackNavigator()
  return (
<stack.Navigator screenOptions={{headerShown:false}}>
    <stack.Screen name="Splash" component={Splash}/>
    <stack.Screen name="Dashboard" component={Dashboard}/>
    <stack.Screen name="Tabs" component={Tabs}/>
    <stack.Screen name="TabsTeacher" component={TabsTeacher}/>
    <stack.Screen name="Login" component={Login}/>
    <stack.Screen name="Register" component={Register}/>
    <stack.Screen name="Account" component={Account}/>
</stack.Navigator>
  )
}

export default Navigation