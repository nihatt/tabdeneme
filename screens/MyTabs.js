import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
const Tab = createBottomTabNavigator();
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function MyTabs() {
  return (
    <NavigationContainer>

      <Tab.Navigator>
      <Tab.Screen name="Home"  component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'green'} size={40} />
          ),
        }} />
      <Tab.Screen name="Settings" component={SettingsScreen}  options={{
          tabBarLabel: 'Emergency',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sign-caution" color={'red'} size={40} />
          ),
        }}/>
      <Tab.Screen name="ProfileScreen" component={ProfileScreen}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-profile" color={'blue'} size={37} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
      

   
    

  );
}
export default MyTabs;