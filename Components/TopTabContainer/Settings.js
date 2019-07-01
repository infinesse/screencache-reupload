import React, { Component } from 'react';
import { Icon } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, Text } from 'react-native';

class SettingsTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-chatboxes" style={{ color: tintColor }} />
    )
  };

  render() {
    const { } = this.props;
    return null;
  }
}

export default SettingsTab;
