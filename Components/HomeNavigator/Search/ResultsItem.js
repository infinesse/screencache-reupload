import React from 'react';
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

const ResultsItem = ({
  navigation,

  // State
  item,
  index,
  isEditing,
  itemsLocked,

  // Actions
  beginEditItem,
  endEditItem,
  editItem,
  deleteItem,
  lockItems,
}) => {
  const swipeSettings = {
    autoClose: true,
    buttonWidth: 50,
    left: [
      {
        onPress: () => {
          Alert.alert(
            'Alert',
            'Are you sure you want to share?',
            [
              {
                text: 'No',
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
                style: 'cancel'
              },
              {
                text: 'Yes',
                onPress: () => deleteItem(item.key)
              }
            ],
            { cancelable: true }
          );
        },
        text: 'Delete',
        type: 'delete'
      }
    ],
    rowId: index,
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

          backgroundColor: '#1f1f1f'
        }}
      >
        <TouchableOpacity onPress={
          () => navigation.navigate('Details', { imageUrl: item.imageUrl })}
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
              autoFocus={isEditing}
              multiline
            />
          ) : (
              <Text style={textStyle} onPress={() => beginEditItem(item.key)}>
                {item.textContent}
              </Text>
            )}

          {/*<View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'bottom'
            }}
          >
            {itemsLocked === false ? (
              <Icon
                name="md-unlock"
                style={{ color: '#d1cece', fontSize: 75 }}
                onPress={() => {
                  lockItems(true);
                }}
              />
            ) : (
              <Icon
                name="md-lock"
                style={{ color: 'white', fontSize: 75 }}
                onPress={() => {
                  lockItems(false);
                }}
              />
            )}

            {!itemsLocked && (
              <Icon
                name="md-trash"
                style={{ margin: 15, color: 'red', fontSize: 75 }}
                onPress={() => {
                  console.warn('trashpresed');
                }}
              />
            )}
          </View>*/}
        </TouchableOpacity>
      </View>
    </Swipeout>
  );
};

export default ResultsItem;
