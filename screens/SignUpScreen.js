import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    // title: 'Links',
  };

  render() {
    return (
      <View >
        <Text>Hello Sign Up</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
