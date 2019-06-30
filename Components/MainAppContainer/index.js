import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import TopTabContainer from '../TopTabContainer';
import Login from './Login';
import Register from './Register';

const SwitchNavigator = createSwitchNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Home: {
    screen: TopTabContainer
  }
});

export default createAppContainer(SwitchNavigator);
