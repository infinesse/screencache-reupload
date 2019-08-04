import React from 'react';
import { Icon } from 'native-base';
import { StatusBar, View, StyleSheet } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from '../HomeNavigator';
import ProfileScreen from './Profile';
import MessagesScreen from './Messages';

const getNavIconStyle = (routeName, currentRouteName) => ({
  color: routeName === currentRouteName
    ? '#004991'
    : '#f0edf6'
});

const TopStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'screencache'
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'screencache'
      }
    },
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        title: 'screencache'
      }
    }
  },
  {
    headerMode: 'float',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#003452'
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerLeft: null,
      headerRight: (
        <View style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: 120
        }}>
          <StatusBar barStyle="light-content" />
          <Icon
            name="md-search"
            onPress={() => navigation.navigate('Home')}
            style={getNavIconStyle('Home', navigation.state.routeName)}
          />
          <Icon
            name="md-person"
            onPress={() => navigation.navigate('Profile')}
            style={getNavIconStyle('Profile', navigation.state.routeName)}
          />
          <Icon
            name="md-chatbubbles"
            onPress={() => navigation.navigate('Messages')}
            style={getNavIconStyle('Messages', navigation.state.routeName)}
          />
        </View>
      )
    })
  }
);

export default createAppContainer(TopStackNavigator);
