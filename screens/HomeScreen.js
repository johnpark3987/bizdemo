import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = (options) => {
    console.log(options);
    console.log(options.screenProps);
    console.log(options.navigationOptionsq);
    return {

      headerTitle: 'Fixnapp'
    }
  }

  // console.log(navigationOptions);
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
