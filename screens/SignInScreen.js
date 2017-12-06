import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Card } from 'react-native-elements';
import { CardSection, Input } from '../components/common/';
import { connect } from 'react-redux';
import * as actions from '../actions';

const icon = require('../assets/images/robot-prod.png');

class SignInScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  onLoginPress = () => {
    console.log(this.props);
    console.log(this.props.email);
    console.log(this.props.password);
    const userObj = {
      "userEmail" : this.props.email,
      "userPassword" : this.props.password
    }
    this.props.tryLoginUser(userObj);
    // this.props.navigation.navigate('Main');
  }

  onEmailChange = (value) => {
    this.props.emailChanged(value);
  }

  onPasswordChange = (value) => {
    this.props.passwordChanged(value);
  }

  render() {
    const { loginLogoStyle, logoContainer } = styles;

    return (
      <View>
        <View style={logoContainer}>
          <Image
          style={styles.loginLogoStyles}
          source={icon}
          />
          <Text>Fixnapp</Text>
        </View>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="Password"
              onChangeText={this.onPasswordChange}
              value={this.props.password}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>

          </Text>

          <CardSection>
            <Button
              title="Login"
              onPress={this.onLoginPress}
            />
          </CardSection>
        </Card>

        <Card style={styles.logoContainerStyle}>
          <CardSection>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')}>
          <Text>Forgot Password</Text>
          </TouchableOpacity>
          </CardSection>

          <CardSection>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text>Sign Up</Text>
          </TouchableOpacity>
          </CardSection>
        </Card>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  loginLogoStyle: {
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorTextStyle: {

  }
});

const mapStateToProps = ({ auth }) => {
  console.log('mapStateToProps');
  return {
    email: auth.email,
    password: auth.password
  }
}

export default connect(mapStateToProps, actions)(SignInScreen);
