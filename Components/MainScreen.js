import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import { Icon } from 'native-base';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import HomeTab from './AppTabNavigator/HomeTab';
import UploadTab from './AppTabNavigator/UploadTab';
import SettingsTab from './AppTabNavigator/SettingsTab';

export default class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-add-circle" style={{ paddingLeft: 10 }} />,
    title: 'screencache',
    headerRight: <Icon name="ios-settings" style={{ paddingRight: 10 }} />
  };

  render() {
    return <AppTabContainer />;
  }
}
const AppTabNavigator = createMaterialTopTabNavigator(
  {
    HomeTab: {
      screen: HomeTab
    },
    UploadTab: {
      screen: UploadTab
    },
    SettingsTab: {
      screen: SettingsTab
    }
  },
  {
    tabBarPosition: 'bottom',
    backgroundColor: '#f2f2f2',

    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: 'white'
          }
        }),
        backgroundColor: 'white'
      },
      indicatorStyle: {
        height: 0
      },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      activeBackgroundColor: 'white',
      showLabel: false,
      showIcon: true
    }
  }
);
const AppTabContainer = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
