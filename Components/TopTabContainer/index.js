import React from 'react';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
  SafeAreaView
} from 'react-navigation';
// import { Platform, Alert } from 'react-native';
import MainTab from '../BottomTabContainer';
import ProfileTab from './Profile';
import SettingsTab from './Settings';


// export default class TopTabNavigator extends React.Component {
//   render() {
//     return null;
//   }};

const TopTabNavigator = createMaterialTopTabNavigator(
  {
    Main: {
      screen: MainTab
    },
    Profile: {
      screen: ProfileTab
    },
    Messages: {
      screen: SettingsTab
    }
  }, {
    swipeEnabled: false,
    tabBarOptions: {
      labelStyle: {
        fontSize: 20,
      },
      tabStyle: {

      },
      style: {
        backgroundColor: 'black',
      },
    }
  }
);

const TopTabContainer = createAppContainer(TopTabNavigator);

export default TopTabContainer;
