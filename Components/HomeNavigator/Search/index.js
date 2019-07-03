import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import ResultsList from './ResultsList';
import { SearchBar } from 'react-native-elements';

const Search = ({ screenProps }) => {
  const {
    // App state
    items,
    search,
    editingItem,
    unlockedLock,
    trashCanDisplayed,

    // App props
    updateSearch,
    beginEditItem,
    endEditItem,
    editItem,
    unlockLock,
    lockLock
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
