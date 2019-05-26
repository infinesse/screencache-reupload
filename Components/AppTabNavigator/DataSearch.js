import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import FilterTab from '../FilterTab';
import { SearchBar } from 'react-native-elements';

class DataSearch extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="ios-filing"
        style={{ color: tintColor, paddingBottom: 30, paddingRight: 100 }}
      />
    )
  };

  render() {
    const {
      // App state
      items,
      search,
      editingItem,

      // App props
      updateSearch,
      beginEditItem,
      endEditItem,
      editItem
    } = this.props.screenProps;

    return (
      <Container style={styles.container}>
        <SearchBar
          inputContainerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderRadius: 5
          }}
          containerStyle={{ backgroundColor: 'transparent' }}
          // inputStyle={{ backgroundColor: 'grey' }}
          placeholder="Filter for..."
          placeholderTextColor="white"
          onChangeText={updateSearch}
          value={search}
        />
        <Content>
          <FilterTab
            {...{
              items,
              search,
              editingItem,
              beginEditItem,
              endEditItem,
              editItem
            }}
          />
        </Content>
      </Container>
    );
  }
}
export default DataSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});
