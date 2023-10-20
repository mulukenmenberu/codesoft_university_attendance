import React, { lazy, Suspense } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const LazyDashboard = lazy(() => import('./Dashboard'));
const DashboardTeacher = lazy(() => import('./DashboardTeacher'));
const ManageCourse = lazy(() => import('./DashboardTeacher'));

const Tabs = () => {
  const role = 1
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: '#9FE2BF',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
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


      {role === 1 ? (
  <Tab.Screen
    name="Course"
    options={{
      tabBarLabel: 'Course',
      tabBarIcon: ({ color, size }) => (
        <Entypo name="open-book" color={color} size={size} />
      ),
    }}
  >
    {() => (
      <Suspense fallback={<LoadingComponent />}>
        <ManageCourse />
      </Suspense>
    )}
  </Tab.Screen>
) : null}

      <Tab.Screen
        name="Dashboard2"
        options={{
          tabBarLabel: 'Home2',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      >
        {() => (
          <Suspense fallback={<LoadingComponent />}>
            <DashboardTeacher />
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
