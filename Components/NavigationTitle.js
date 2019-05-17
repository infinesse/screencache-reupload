import React, { Component } from 'react';
import { Platform } from 'react-native';

import { Icon } from 'native-base';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import DataSearch from './AppTabNavigator/DataSearch';
import UploadTab from './AppTabNavigator/UploadTab';
// import SettingsTab from './AppTabNavigator/SettingsTab';

//NOTE: Literally just navigation. TopBar oriented bottom.

export default class NavigationTitle extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'black'
    },

    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: '300'
    },
    headerLeft: <Icon name="ios-add-circle" style={{ paddingLeft: 10 }} />,
    title: 's c r e e n c a c h e',
    headerRight: <Icon name="ios-settings" style={{ paddingRight: 10 }} />
  };

  render() {
    return <AppTabContainer />;
  }
}
const AppTabNavigator = createMaterialTopTabNavigator(
  {
    HomeTab: {
      screen: DataSearch
    },
    UploadTab: {
      screen: UploadTab
    }
    // SettingsTab: {
    //   screen: SettingsTab
    // }
  },
  {
    tabBarPosition: 'bottom',
    backgroundColor: 'transparent',

    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: 'black'
          }
        }),
        backgroundColor: 'black'
        // position: 'absolute'
      },
      indicatorStyle: {
        height: 0
      },
      activeTintColor: 'white',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true
    }
  }
);
const AppTabContainer = createAppContainer(AppTabNavigator);
