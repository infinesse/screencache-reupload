import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavigationTitle from './Components/NavigationTitle';

//NOTE: mock data and search and filter displayed
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

const initialState = {
  items: serverData,
  search: '',
  editingItem: null
};

export default class App extends React.Component {
  state = initialState;

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

  //addItem

  render() {
    return (
      <AppRun
        screenProps={{
          ...this.state,
          updateSearch: this.updateSearch,
          beginEditItem: this.beginEditItem,
          endEditItem: this.endEditItem,
          editItem: this.editItem
        }}
      />
    );
  }
}

const MainStackNavigator = createStackNavigator({
  Main: {
    screen: NavigationTitle
  }
});
const AppRun = createAppContainer(MainStackNavigator);
