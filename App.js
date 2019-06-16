import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import uuid from 'react-native-uuid';
import AppTabNavigator from './Components/NavigationTitle';
import Login from './Components/Login';
import Register from './Components/Register';

//NOTE: mock data and search and filter displayed
const serverData = [
  {
    key: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
    imageUrl:
      'https://lh3.googleusercontent.com/w7EhTeRH1viSCr-8slvbcqP0jz5QsSGfygfOh90ZkcuvkMq_kBjbNIYxettvJoWOCpso7zGw-AMqe4zE01VUKYf3zQ',
    textContent:
      'Antibiotic resistance and the overprescribing of them. I dont think this gets talked about nearly enough and its already a problem. I remember reading an article recently that said in the future antibiotic resistant bacteria related deaths will surpasas cancer deaths.'
  },
  {
    key: '110ec58a-a0f2-4ac4-8393-c866d813b8d1',
    imageUrl:
      'https://lh3.googleusercontent.com/ijJB83f0vkB7ulMn3vVNU0peCyYMfMH5MSRS_oEFIrMEnVvTeEqhQxJ7b3T2YyMRXtuCEyt8dGMz_PUNt6lWsOT2FkI',
    textContent: 'movie avengers endgame showtimes film theater'
  },
  {
    key: '6a979ee5-eccd-4361-b0e9-99ff6b4b900a',
    imageUrl:
      'https://lh3.googleusercontent.com/g6sAKB8ylhumGEvgIfrafhF8HqV5KlRJb_t9GHIdYLJtlyYA45ZfeTBS4y4eKQ4DvpbytzbCjS3CVr-GNw5R_g1K',
    textContent:
      'This is a hornbill and a dwarf mongoose. They have a symbiotic relationship. When the mongoose forages around it scares bugs out of the grass which are then easiy pickings for the hornbill. In turn the hornbill is an early warning system for predators for the mongoose.'
  },
  {
    key: 'be3d9dde-def0-4547-972d-aa4eb8a998e7',
    imageUrl:
      'https://lh3.googleusercontent.com/ZgmPvVU0TtuWHCtwtvZRmPQ-5cUYFeZQlrf1DgCADRw38keeqsJrLnstIr0OCoIXk4qsfsw5KnHRZznc_s00Q5Fk',
    textContent:
      'reddit comment automation robots universal-basic-income utopia free market libertarian jobs'
  },
  {
    key: '4a1fddd1-f91a-4414-8edb-8a3326d29c46',
    imageUrl:
      'https://lh3.googleusercontent.com/9SG09CZO8mRLjg6HePL9wNIG3ofH8w2vGOR_s1fnhfv5KITGX8eC8NuyK6ovNpa4XWXp3-fMKE5YxcdIZ46tEjD0',
    textContent:
      'reddit comment antarctica interesting science ancient human disease thaw.'
  }
];
// const uuidConst = uuid.v1();

const initialState = {
  items: serverData,
  search: '',
  editingItem: null,
  nextItemId: 100,
  unlockedLock: false,
  trashCanDisplayed: false
};

export default class App extends React.Component {
  state = initialState;

  unlockLock = () =>
    this.setState({
      ...this.state,
      unlockedLock: true,
      trashCanDisplayed: true
    });

  lockLock = () =>
    this.setState({
      ...this.state,
      unlockedLock: false,
      trashCanDisplayed: false
    });

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

  addItem = (textContent, imageUrl) => {
    const newItemId = uuid.v1();
    this.setState({
      ...this.state,
      editingItem: newItemId,
      items: [
        {
          key: newItemId,
          imageUrl,
          textContent
        }
      ].concat(this.state.items)
    });
  };

  render() {
    return (
      <AppRun
        screenProps={{
          ...this.state,
          updateSearch: this.updateSearch,
          beginEditItem: this.beginEditItem,
          endEditItem: this.endEditItem,
          editItem: this.editItem,
          addItem: this.addItem,
          unlockLock: this.unlockLock,
          lockLock: this.lockLock,
          trashCanDisplayed: this.trashCanDisplayed
        }}
      />
    );
  }
}

const MainStackNavigator = createSwitchNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Main: {
    screen: AppTabNavigator
  }
});
const AppRun = createAppContainer(MainStackNavigator);
