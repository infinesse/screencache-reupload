import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import TopStackContainer from '../MainNavigator';
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
    screen: TopStackContainer
  }
},
{
  initialRouteName: 'Home'
});

export default createAppContainer(SwitchNavigator);
