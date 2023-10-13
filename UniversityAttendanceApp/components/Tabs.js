import React, { lazy, Suspense } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const LazyDashboard = lazy(() => import('./Dashboard'));
const LazyDashboard2 = lazy(() => import('./Dashboard2'));

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#6495ED',
      },
      
      }}
      tabBarOptions={{
        showLabel: false,
      }}
      tabBarStyle={{
        backgroundColor: 'red', // Set your desired background color
      }}
     
    >
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      >
        {() => (
          <Suspense fallback={<LoadingComponent />}>
            <LazyDashboard />
          </Suspense>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Dashboard2"
        options={{
          tabBarLabel: 'Home2',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home2" color={color} size={size} />
          ),
        }}
      >
        {() => (
          <Suspense fallback={<LoadingComponent />}>
            <LazyDashboard2 />
          </Suspense>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;

function LoadingComponent() {
  return <Text>Loading...</Text>; // Replace with your loading indicator component
}
