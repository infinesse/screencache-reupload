import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import { Icon } from 'native-base';

const TEXT_STYLE = {
  // fontStyle: 'italic',
  // fontFamily: 'OpenSans-Bold',

  flex: 1,
  flexWrap: 'wrap',
  color: 'white'
};

var { width, height } = Dimensions.get('window');

class FlatListItem extends Component {
  // componentDidMount() {
  //   Font.loadAsync({
  //     'open-sans-bold': require('./assets/OpenSans-Bold.ttf')
  //   });
  // }
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null
    };
  }
  render() {
    const {
      item,
      isEditing,
      beginEditItem,
      endEditItem,
      editItem,
      unlockedLock,
      unlockLock,
      lockLock,
      trashCanDisplayed
    } = this.props;

    const swipeSettings = {
      autoClose: true,
      buttonWidth: 50,

      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null) {
          this.setState({ activeRowKey: null });
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({ activeRowKey: this.props.item.key });
      },
      left: [
        {
          onPress: () => {
            Alert.alert(
              'Alert',
              'Are you sure you want to share?',
              [
                {
                  text: 'No',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel'
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    null;
                  }
                }
              ],
              { cancelable: true }
            );
          },
          text: 'Share',
          type: 'Default',
          backgroundColor: '#22cc'
        }
      ],
      right: [
        {
          onPress: () => {
            Alert.alert(
              'Alert',
              'Are you sure you want to delete?',
              [
                {
                  text: 'No',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel'
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    serverData.splice(this.props.index, 1);
                  }
                }
              ],
              { cancelable: true }
            );
          },
          text: 'Delete',
          type: 'delete'
        }
      ],
      rowId: this.props.index,
      sectionId: 1
    };
    return (
      <Swipeout {...swipeSettings}>
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
          <TouchableOpacity
            onPress={() => {
              console.warn('image pressed');
            }}
            // onPress={console.warn(
            //   'this is the key of the image pressed ' + item.key
            // )}
          >
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
            {/* <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'bottom'
              }}
            >
        
              {unlockedLock ? (
                <Icon
                  name="md-unlock"
                  style={{ color: '#d1cece', fontSize: 75 }}
                  onPress={() => {
                    lockLock();
                  }}
                />
              ) : (
                <Icon
                  name="md-lock"
                  style={{ color: 'white', fontSize: 75 }}
                  onPress={() => {
                    unlockLock();
                  }}
                />
              )}
              {unlockedLock ? (
                <Icon
                  name="md-trash"
                  style={{ margin: 15, color: 'red', fontSize: 75 }}
                  onPress={() => {
                    console.warn('trashpresed');
                  }}
                />
              ) : null}
            </View> */}
          </TouchableOpacity>
        </View>
      </Swipeout>
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
      editItem,
      unlockedLock,
      unlockLock,
      lockLock,
      trashCanDisplayed
    } = this.props;
    // console.warn(this.props.lockLock);
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
                unlockedLock={unlockedLock}
                unlockLock={unlockLock}
                lockLock={lockLock}
                trashCanDisplayed={trashCanDisplayed}
              />
            );
          }}
        />
      </View>
    );
  }
}
