import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Container, Content } from 'native-base';
import ResultsList from './ResultsList';
import { SearchBar } from 'react-native-elements';

const Search = ({ screenProps, navigation }) => {
  const {
    // State
    items,
    search,
    editingItem,
    itemsLocked,

    // Actions
    updateSearch,
    beginEditItem,
    endEditItem,
    editItem,
    deleteItem,
    lockItems
  } = screenProps;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <Container style={styles.container}>
        <SearchBar
          inputContainerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderRadius: 5
          }}
          containerStyle={{ backgroundColor: 'transparent' }}
          placeholder="Filter for..."
          placeholderTextColor="white"
          onChangeText={updateSearch}
          value={search}
        />
        <Content>
          <ResultsList
            {...{
              // Pipe props
              navigation,

              // Pipe state
              items,
              search,
              editingItem,
              itemsLocked,

              // Pipe actions
              beginEditItem,
              endEditItem,
              editItem,
              deleteItem,
              lockItems
            }}
          />
        </Content>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});

export default Search;
