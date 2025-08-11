import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../screens/AuthHomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import {createStaticNavigation} from '@react-navigation/native';

const AuthStack = createStackNavigator({
  screens: {
    AuthHome: AuthHomeScreen,
    Login: LoginScreen,
    SignUp: SignupScreen,
  },
});

const AuthNavigation = createStaticNavigation(AuthStack);

export default AuthNavigation;
