import React from 'react';
import { createAppContainer } from 'react-navigation';
import createAnimatedBottomTabNavigator from './createAnimatedBottomTabNavigator';
import { Icon } from 'native-base';
import SearchTab from './Search';
import UploadTab from './Upload';
import ItemDetails from './Details';

const BottomTabNavigator = createAnimatedBottomTabNavigator(
  {
    Search: {
      screen: SearchTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="ios-filing"
            style={{ color: tintColor, paddingBottom: 30 }}
          />
        )
      }
    },
    Details: {
      screen: ItemDetails,
    },
    Upload: {
      screen: UploadTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="md-archive"
            style={{
              color: tintColor,
              paddingBottom: 30
            }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#004991',
      inactiveTintColor: '#f0edf6',
      tabStyle: {
        backgroundColor: '#003452',
        paddingTop: 16
      },
      style: {
        backgroundColor: '#003452',
        height: 16,
        paddingTop: 8
      },
      showLabel: false
    }
  }
);

export default createAppContainer(BottomTabNavigator);
