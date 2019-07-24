import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'native-base';
import SearchTab from './Search';
import UploadTab from './Upload';
import ItemDetails from './Details';

const BottomTabNavigator = createMaterialBottomTabNavigator(
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
    initialRouteName: 'Search',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: 'black' },
    labeled: false
  }
);

export default createAppContainer(BottomTabNavigator);
