import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import MainNavigator from '../MainNavigator';
import Login from './Login';
import Register from './Register';
import Splash from './Splash';

const SwitchNavigator = createSwitchNavigator({
  Splash: {
    screen: Splash
  },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Home: {
    screen: MainNavigator
  }
},
{
  initialRouteName: 'Home'
});

export default createAppContainer(SwitchNavigator);
