import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

var images = [
  require('../assets/baby.jpeg'),
  require('../assets/belly.jpeg'),
  require('../assets/catposts.jpeg'),
  require('../assets/catzilla.jpeg'),
  require('../assets/chonk.jpeg'),
  require('../assets/flavors.jpeg'),
  require('../assets/gang.jpeg'),
  require('../assets/mask.jpeg'),
  require('../assets/money.jpeg'),
  require('../assets/serval.jpeg'),
  require('../assets/tight.jpeg'),
  require('../assets/tree.jpeg')
];
var { width, height } = Dimensions.get('window');

class CardComponent extends Component {
  renderHome = () => {
    return images.map((image, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: height / 3 },
            { marginBottom: 2 },
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
          ]}
        >
          <Image
            style={{ flex: 1, width: undefined, height: undefined }}
            source={image}
          />
        </View>
      );
    });
  };
  render() {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {this.renderHome()}
      </View>
    );
  }
}
export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
