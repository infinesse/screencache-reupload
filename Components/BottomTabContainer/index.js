import React, { Component } from 'react';
import { Platform, Alert } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import DataSearch from './DataSearch';
import UploadTab from './UploadTab';

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: DataSearch
    },
    Upload: {
      screen: UploadTab
    }
  }, {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: 'black' },


    // {
    //   // swipeEnabled: false,

    //   tabBarOptions: {
    //     tabStyle: {},
    //     style: {
    //       display: 'flex',
    //       ...Platform.select({
    //         android: {}
    //       }),
    //       backgroundColor: 'black'
    //       // position: 'absolute'
    //     },
    //     indicatorStyle: {
    //       height: 0
    //     },
    //     activeTintColor: 'white',
    //     inactiveTintColor: '#d1cece',
    //     showLabel: false,
    //     showIcon: true
    //   }
  }
);

const BottomTabContainer = createAppContainer(BottomTabNavigator);

export default BottomTabContainer;
