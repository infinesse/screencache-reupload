import React from 'react';
import { Icon } from 'native-base';
import { StatusBar, View, Dimensions, Image, StyleSheet } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from '../HomeNavigator';
import ProfileScreen from './Profile';
import MessagesScreen from './Messages';
import colors from '../../assets/colors.json';
import { LinearGradient } from 'expo-linear-gradient';
import headerImage from '../../assets/header-art.svg';

var { height, width } = Dimensions.get('window');
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
      headerBackground: (
        <View style={{ backgroundColor: 'transparent', height: '100%', width: '100%' }}>
          <LinearGradient

            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[colors.Secondary, colors.Primary, colors.Secondary]}
          >
            <Image style={{ width: '100%', height: '100%' }} source={headerImage}></Image></LinearGradient>
        </View>

      ),


      // headerStyle: {
      //   backgroundColor: 'transparent',

      // },
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
