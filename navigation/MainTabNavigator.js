import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
//
import HomeScreen from '../screens/HomeScreen';
// import SettingsScreen from '../screens/SettingsScreen';

export default DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    }
    // Links: {
    //   screen: LinksScreen,
    // },
    // Settings: {
    //   screen: SettingsScreen,
    // },
  },
  {
    navigationOptions: ({ navigation }) => ({

    }),
    // headerTitle: 'YO'
  }
);
