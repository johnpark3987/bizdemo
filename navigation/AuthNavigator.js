// import { Platform } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

// import Colors from '../constants/Colors';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPWScreen from '../screens/ForgotPWScreen';
import WelcomeScreen from '../screens/WelcomeScreen'
export default StackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    SignIn: {
      screen: SignInScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    },
    Forgot: {
      screen: ForgotPWScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({

    }),
    animationEnabled: true,
    swipeEnabled: false,
  }
);
