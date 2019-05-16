import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import CardComponent from '../CardComponent';
import { SearchBar } from 'react-native-elements';

const serverData = [
  {
    key: '0028',
    imageUrl:
      'https://lh3.googleusercontent.com/w7EhTeRH1viSCr-8slvbcqP0jz5QsSGfygfOh90ZkcuvkMq_kBjbNIYxettvJoWOCpso7zGw-AMqe4zE01VUKYf3zQ',
    textContent:
      'Antibiotic resistance and the overprescribing of them. I dont think this gets talked about nearly enough and its already a problem. I remember reading an article recently that said in the future antibiotic resistant bacteria related deaths will surpasas cancer deaths.'
  },
  {
    key: '0048',
    imageUrl:
      'https://lh3.googleusercontent.com/ijJB83f0vkB7ulMn3vVNU0peCyYMfMH5MSRS_oEFIrMEnVvTeEqhQxJ7b3T2YyMRXtuCEyt8dGMz_PUNt6lWsOT2FkI',
    textContent: 'movie avengers endgame showtimes film theater'
  },
  {
    key: '0064',
    imageUrl:
      'https://lh3.googleusercontent.com/g6sAKB8ylhumGEvgIfrafhF8HqV5KlRJb_t9GHIdYLJtlyYA45ZfeTBS4y4eKQ4DvpbytzbCjS3CVr-GNw5R_g1K',
    textContent:
      'This is a hornbill and a dwarf mongoose. They have a symbiotic relationship. When the mongoose forages around it scares bugs out of the grass which are then easiy pickings for the hornbill. In turn the hornbill is an early warning system for predators for the mongoose.'
  },
  {
    key: '0089',
    imageUrl:
      'https://lh3.googleusercontent.com/ZgmPvVU0TtuWHCtwtvZRmPQ-5cUYFeZQlrf1DgCADRw38keeqsJrLnstIr0OCoIXk4qsfsw5KnHRZznc_s00Q5Fk',
    textContent:
      'reddit comment automation robots universal-basic-income utopia free market libertarian jobs'
  },
  {
    key: '0119',
    imageUrl:
      'https://lh3.googleusercontent.com/9SG09CZO8mRLjg6HePL9wNIG3ofH8w2vGOR_s1fnhfv5KITGX8eC8NuyK6ovNpa4XWXp3-fMKE5YxcdIZ46tEjD0',
    textContent:
      'reddit comment antarctica interesting science ancient human disease thaw.'
  }
];

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={{ color: tintColor }} />
    )
  };

  state = {
    items: serverData,
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

  editItem = (key, text) => {
    this.setState({
      ...this.state,
      items: this.state.items.map(item => ({
        ...item,
        textContent: item.key === key ? text : item.textContent
      }))
    });
  };

  render() {
    const { items, search, editingItem } = this.state;

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
              items,
              search,
              editingItem,
              beginEditItem: this.beginEditItem,
              endEditItem: this.endEditItem,
              editItem: this.editItem
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
