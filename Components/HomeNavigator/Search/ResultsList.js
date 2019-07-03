import React from 'react';
import { View, FlatList } from 'react-native';
import ResultsItem from './ResultsItem';

const ResultsList = ({
  // State
  items,
  search,
  itemsLocked,

  // Actions
  editingItem,
  beginEditItem,
  endEditItem,
  editItem,
  deleteItem,
  lockItems
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
            // Calculated props
            item={item}
            index={index}
            isEditing={editingItem === item.key}

            // State
            itemsLocked={itemsLocked}

            // Actions
            beginEditItem={beginEditItem}
            endEditItem={endEditItem}
            editItem={editItem}
            deleteItem={deleteItem}
            lockItems={lockItems}
          />
        );
      }}
    />
  </View>
);

export default ResultsList;
