import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import CardComponent from '../CardComponent';
import { SearchBar } from 'react-native-elements';

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={{ color: tintColor }} />
    )
  };

  state = {
    search: '',
    editingItem: null
  };

  updateSearch = search => {
    this.setState({
      ...this.state,
      search
    });
  };

  beginEditItem = editingItem =>
    this.setState({
      ...this.state,
      editingItem
    });

  endEditItem = () =>
    this.setState({
      ...this.state,
      editingItem: null
    });

  render() {
    const { search, editingItem } = this.state;

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
          onChangeText={this.updateSearch}
          value={search}
        />
        <Content>
          <CardComponent
            {...{
              search,
              editingItem,
              beginEditItem: this.beginEditItem,
              endEditItem: this.endEditItem
            }}
          />
        </Content>
      </Container>
    );
  }
}
export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});

/*
search array bits found @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find?fbclid=IwAR2CLk5cl82y1AYMLtTtOZs12dc9Ue5I_iuHQwwtuuxr8oTouMh2Oz6wZnc

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found); 

*/
