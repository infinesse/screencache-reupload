import React, { Component } from 'react';
import { Icon } from 'native-base';
import { SearchBar } from 'react-native-elements';

class SettingsTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-settings" style={{ color: tintColor }} />
    )
  };

  state = {
    search: ''
  };
  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
export default SettingsTab;
