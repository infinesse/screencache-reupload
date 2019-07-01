import React, { Component } from 'react';
import { Icon } from 'native-base';
import {
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" style={{ color: "white" }} />
    )
  };

  render() {
    const { } = this.props;
    return null;
  }
}

export default Profile;
