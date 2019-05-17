import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavigationTitle from './Components/NavigationTitle';

export default class App extends React.Component {
  render() {
    return <AppRun />;
  }
}
const MainStackNavigator = createStackNavigator({
  Main: {
    screen: NavigationTitle
  }
});
const AppRun = createAppContainer(MainStackNavigator);
