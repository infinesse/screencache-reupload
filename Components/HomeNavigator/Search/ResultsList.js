import React from 'react';
import { View, FlatList } from 'react-native';
import ResultsItem from './ResultsItem';
import getMatch from './getMatch';

const ResultsList = ({
  // Props
  navigation,

  // State
  items,
  search,
  itemsLocked,
  newItem,

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
      data={items.filter(getMatch(search))}
      renderItem={({ item, index }) => {
        return (
          <ResultsItem
            // Calculated props
            navigation={navigation}
            item={item}
            index={index}
            isEditing={editingItem === item.key}
            isNew={newItem}

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
