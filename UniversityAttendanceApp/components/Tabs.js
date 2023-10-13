import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';
const Tab = createBottomTabNavigator();

export default Tabs = ()=> {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown:false
      }}
      tabBarOptions={{
        showLabel:false

      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Dashboard2"
        component={Dashboard2}
        options={{
          tabBarLabel: 'Home2',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home2" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}