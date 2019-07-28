import React from 'react';
import uuid from 'react-native-uuid';
import MainAppContainer from './Components/RootNavigator';
import serverData from './assets/serverData';

const initialState = {
  items: serverData,
  search: '',
  editingItem: null,
  newItem: false,
  itemsLocked: false
};

export default class App extends React.Component {
  state = initialState;

  lockItems = (lock) =>
    this.setState({
      ...this.state,
      itemsLocked: lock
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
      editingItem: null,
      newItem: false
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
      newItem: true,
      items: [
        {
          key: newItemId,
          imageUrl,
          textContent
        }
      ].concat(this.state.items)
    });
  };

  deleteItem = key => {
    const removeIndex = this.state.items.findIndex(item => item.key === key);

    let newItems = this.state.items.slice();
    newItems.splice(removeIndex, 1);

    this.setState({
      ...this.state,
      items: newItems
    });
  };

  render = () => (
    <MainAppContainer
      screenProps={{
        ...this.state,
        updateSearch: this.updateSearch,
        beginEditItem: this.beginEditItem,
        endEditItem: this.endEditItem,
        editItem: this.editItem,
        deleteItem: this.deleteItem,
        addItem: this.addItem,
        itemsLocked: this.itemsLocked,
        lockItems: this.lockItems
      }}
    />
  );
}
