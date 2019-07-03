import React from 'react';
import { View, FlatList } from 'react-native';
import ResultsItem from './ResultsItem';

const ResultsList = ({
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
}) => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={items
        .filter(item => !search || (item.textContent || '')
        .search(new RegExp(search, 'i')) !== -1
      )}
      renderItem={({ item, index }) => {
        return (
          <ResultsItem
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

export default ResultsList;
