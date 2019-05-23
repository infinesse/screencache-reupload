import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

// var { width, height } = Dimensions.get('window');
// class ProfileJS extends Component {
//   render() {}
// }

export default class ProfilePage extends Component {
  render() {
    const {} = this.props;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#white',
          width: width,
          heigt: height
        }}
      />
    );
  }
}
