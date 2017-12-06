import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = (options) => {
    title: 'Burger'
  }

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
