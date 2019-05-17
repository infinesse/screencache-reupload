import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

const TEXT_STYLE = {
  fontStyle: 'italic',
  flex: 1,
  flexWrap: 'wrap',
  color: 'white'
};

var { width, height } = Dimensions.get('window');

class FlatListItem extends Component {
  render() {
    const {
      item,
      isEditing,
      beginEditItem,
      endEditItem,
      editItem
    } = this.props;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderWidth: 5,
          borderColor: '#2e2e2e',
          marginBottom: 5,
          backgroundColor: '#1f1f1f'
        }}
      >
        <TouchableOpacity onPress={this.zoomView}>
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: 200, height: 300, margin: 5 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, flexWrap: 'wrap' }}>
          {isEditing ? (
            <TextInput
              style={TEXT_STYLE}
              value={item.textContent}
              onChangeText={newText => editItem(item.key, newText)}
              onSubmitEditing={endEditItem}
              multiline
            />
          ) : (
            <Text style={TEXT_STYLE} onPress={() => beginEditItem(item.key)}>
              {item.textContent}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
export default class BasicFlatList extends Component {
  render() {
    const {
      items,
      search,
      editingItem,
      beginEditItem,
      endEditItem,
      editItem
    } = this.props;

    const pattern = new RegExp(search, 'i');

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={items.filter(
            item => !search || (item.textContent || '').search(pattern) !== -1
          )}
          renderItem={({ item, index }) => {
            return (
              <FlatListItem
                item={item}
                index={index}
                isEditing={editingItem === item.key}
                beginEditItem={beginEditItem}
                endEditItem={endEditItem}
                editItem={editItem}
              />
            );
          }}
        />
      </View>
    );
  }
}
