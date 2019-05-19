import React, { Component } from 'react';
import { Platform, Alert } from 'react-native';

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
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: 'black'
    },

    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: '300',
      color: 'white'
    },
    headerLeft: (
      <Icon
        name="ios-contact"
        onPress={() =>
          Alert.alert(
            'Self',
            'Feature not available yet.', // <- this part is optional, you can pass an empty string
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
          )
        }
        style={{ color: 'white', paddingLeft: 10 }}
      />
    ),
    title: 's c r e e n c a c h e',
    headerRight: (
      <Icon
        onPress={() =>
          Alert.alert(
            'Friends',
            'Feature not available yet.', // <- this part is optional, you can pass an empty string
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
          )
        }
        name="ios-contacts"
        style={{ color: 'white', paddingRight: 10 }}
      />
    )
  });

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
  },
  {
    tabBarPosition: 'bottom',

    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {}
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
