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

const styles = StyleSheet.create({
  icon: {
    color: 'white'
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
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
        title: 'profile'
      }
    },
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        title: 'messages'
      }
    }
  },
  {
    headerMode: 'float',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerRight: (
        <View style={styles.menu}>
          <StatusBar barStyle="light-content" />
          <Icon
            name="md-search"
            onPress={() => navigation.navigate('Home')}
            style={styles.icon}
          />
          <Icon
            name="md-person"
            onPress={() => navigation.navigate('Profile')}
            style={styles.icon}
          />
          <Icon
            name="md-chatbubbles"
            onPress={() => navigation.navigate('Messages')}
            style={styles.icon}
          />
        </View>
      )
    })
  }
);

export default createAppContainer(TopStackNavigator);
