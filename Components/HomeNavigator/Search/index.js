import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Container, Content } from 'native-base';
import ResultsList from './ResultsList';
import { SearchBar } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const Search = ({ screenProps, navigation }) => {
  const {
    // State
    items,
    search,
    editingItem,
    newItem,
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
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

      <Container style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#219386', '#2A3694']}
        >

          <SearchBar
            inputContainerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderRadius: 10,
              shadowColor: 'white',
              borderColor: 'white'
            }}
            containerStyle={{ backgroundColor: 'transparent' }}
            placeholder="Filter for..."
            placeholderTextColor="white"
            onChangeText={updateSearch}
            value={search}
          />
        </LinearGradient>
        <Content>
          <ResultsList
            {...{
              // Pipe props
              navigation,

              // Pipe state
              items,
              search,
              editingItem,
              newItem,
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
// searchbar color 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#219386'
  }
});
// #612f3f
// #400036
// #0099cc

export default Search;

