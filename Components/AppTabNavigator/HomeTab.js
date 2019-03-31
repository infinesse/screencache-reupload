import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import CardComponent from '../CardComponent';

// var images = [
//   require('../../assets/baby.jpeg'),
//   require('../../assets/belly.jpeg'),
//   require('../../assets/catowl.jpeg'),
//   require('../../assets/catposts.jpeg'),
//   require('../../assets/catzilla.jpeg'),
//   require('../../assets/chonk.jpeg'),
//   require('../../assets/darkness.jpeg'),
//   require('../../assets/flavors.jpeg'),
//   require('../../assets/gang.jpeg'),
//   require('../../assets/mask.jpeg'),
//   require('../../assets/money.jpeg'),
//   require('../../assets/playful.jpeg'),
//   require('../../assets/serval.jpeg'),
//   require('../../assets/tight.jpeg'),
//   require('../../assets/tree.jpeg')
// ];
// var { width, height } = Dimensions.get('window');

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent />
        </Content>
      </Container>
    );
  }
}
export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});
