import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  {
    text: "Welcome to Fixnapp",
    color: "#03A9F4"
  },
  {
    text: "Get your estimates within few hours",
    color: "#009688"
  },
  {
    text: "Just snap, tap, and fix with a push of a button",
    color: "#03A9F4"
  }
];

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    // this.props.checkForToken();
  }

  componentWillReceiveProps(nextProps) {
    // if(nextProps.hasToken) {
    //   this.props.navigation.navigate('map');
    // } else {
    //   this.setState({ hasToken: false });
    // }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('SignIn');
  }

  welcomeScreenRenderer = () => {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />

    // if(this.state == null) {
    //   return <AppLoading />
    // }
    // if(!this.state.hasToken) {
    //   return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    // }
  }

  render() {
    return (
      <View>
        {this.welcomeScreenRenderer()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // return { hasToken: auth.hasToken };
  return { };
}

export default connect(mapStateToProps, actions)(WelcomeScreen);
