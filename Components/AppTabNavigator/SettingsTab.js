import React, { Component } from 'react';
import { Icon } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, Text } from 'react-native';

class SettingsTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-settings" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.setTextColor}>Settings</Text>
      </View>
    );
  }
}
export default SettingsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  setTextColor: {
    color: 'white'
  }
});
