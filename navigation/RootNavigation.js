// import { Notifications } from 'expo';
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';
// import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootTabNavigator = TabNavigator(
  {
    Auth: {
      screen: AuthNavigator,
    },
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // tabBarIcon: ({ focused }) => {
      //   const { routeName } = navigation.state;
      //   let iconName;
      //   switch (routeName) {
      //     case 'Home':
      //       iconName =
      //         Platform.OS === 'ios'
      //           ? `ios-information-circle${focused ? '' : '-outline'}`
      //           : 'md-information-circle';
      //       break;
      //     case 'Links':
      //       iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
      //       break;
      //     case 'Settings':
      //       iconName =
      //         Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
      //   }
      //   return (
      //     <Ionicons
      //       name={iconName}
      //       size={28}
      //       style={{ marginBottom: -3 }}
      //       color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      //     />
      //   );
      // },
      tabBarVisible: false
    }),
    // tabBarComponent: TabBarBottom,
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default class RootNavigator extends Component {
  componentDidMount() {
    // this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    // this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootTabNavigator />;
  }

  // _registerForPushNotifications() {
  //   // Send our push token over to our backend so we can receive notifications
  //   // You can comment the following line out if you want to stop receiving
  //   // a notification every time you open the app. Check out the source
  //   // for this function in api/registerForPushNotificationsAsync.js
  //   registerForPushNotificationsAsync();
  //
  //   // Watch for incoming notifications
  //   this._notificationSubscription = Notifications.addListener(this._handleNotification);
  // }
  //
  // _handleNotification = ({ origin, data }) => {
  //   console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  // };
}