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
      // ,

      // navigationOptions: () => ({
      //   title: 'Home',
      //   tabBarIcon: ({ tintColor, focused }) => (
      //     <Ionicons
      //       name={focused ? 'ios-person' : 'ios-home-outline'}
      //       size={100}
      //       style={{ color: focused ? `${tabBarColor}` : tintColor }}
      //     />
      //   )
      // })
    },
    Profile: {
      screen: ProfileTab
    },
    Messages: {
      screen: SettingsTab
    }
  }, {
    swipeEnabled: false,
    // navigationOptions: {
    //   tabBarIcon: () => (
    //     <Icon name="ios-person" size={75} color="#900" />)
    // },
    tabBarOptions: {

      // showLabel: false,

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
