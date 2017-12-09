import { AppLoading } from 'expo';
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';
import * as actions from '../actions';

const RootTabNavigator = (hasToken = false) => {
  return TabNavigator(
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
        tabBarVisible: false
      }),
      lazy: true,
      animationEnabled: false,
      swipeEnabled: false,
      initialRouteName: hasToken ? "Main" : "Auth"
    }
  );
};

class RootNavigator extends Component {
  componentWillMount() {
    this.props.checkForUser();
  }
  
  renderRoot = () => {
    switch (this.props.hasToken) {
      case null:
        return <AppLoading />
      default:
        const Root = RootTabNavigator(this.props.hasToken);
        return <Root />;
    }
  }

  render() {
    return this.renderRoot();
  }
};

const mapStateToProps = ({ auth }) => {
  return {
    hasToken: auth.hasToken
  };
};

export default connect(mapStateToProps, actions)(RootNavigator);
