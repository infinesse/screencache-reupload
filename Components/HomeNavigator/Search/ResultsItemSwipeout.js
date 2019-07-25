import React from 'react';
import Swipeout from 'react-native-swipeout';
import { Alert } from 'react-native';

export default ({
    item,
    index,
    deleteItemHandler,
    children
}) => (
    <Swipeout {...{
        autoClose: true,
        buttonWidth: 50,
        left: [{
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
        }],
        right: [{
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
                        onPress: () => deleteItemHandler(item.key)
                    }
                ],
                { cancelable: true }
            );
            },
            text: 'Delete',
            type: 'delete'
        }],
        rowId: index,
        sectionId: 1
  }}>
      {children}
  </Swipeout>
);
