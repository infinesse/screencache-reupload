import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Components/MainScreen';

export default class App extends React.Component {
  render() {
    return <AppRun />;
  }
}
const MainStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});
const AppRun = createAppContainer(MainStackNavigator);
