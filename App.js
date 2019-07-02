import React from 'react';
import uuid from 'react-native-uuid';
import MainAppContainer from './Components/RootNavigator';
import serverData from './assets/serverData';

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

  // deleteItem = key => (

  // )

  render = () => (
    <MainAppContainer
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
