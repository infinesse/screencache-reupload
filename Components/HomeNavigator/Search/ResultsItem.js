import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

const textStyle = {
  flex: 1,
  flexWrap: 'wrap',
  color: 'white'
};

class ResultsItem extends Component {
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
                  style={textStyle}
                  value={item.textContent}
                  onChangeText={newText => editItem(item.key, newText)}
                  onSubmitEditing={endEditItem}
                  multiline
                />
              ) : (
                <Text style={textStyle} onPress={() => beginEditItem(item.key)}>
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

export default ResultsItem;
