import React, { Component } from 'react';
import { View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';

var images = [
  require('../assets/IMG-0028.jpeg'),
  require('../assets/IMG-0048.jpeg'),
  require('../assets/IMG-0064.jpeg'),
  require('../assets/IMG-0089.jpeg'),
  require('../assets/IMG-0119.jpeg'),
  require('../assets/IMG-0151.jpeg'),
  require('../assets/IMG-0152.jpeg'),
  require('../assets/IMG-0153.jpeg'),
  require('../assets/IMG-0154.jpeg'),
  require('../assets/IMG-0155.jpeg'),
  require('../assets/IMG-0184.jpeg'),
  require('../assets/IMG-0221.jpeg'),
  require('../assets/IMG-0268.jpeg'),
  require('../assets/IMG-0309.jpeg'),
  require('../assets/IMG-0320.jpeg'),
  require('../assets/IMG-0474.jpeg'),
  require('../assets/IMG-0707.jpeg'),
  require('../assets/IMG-0860.jpeg')
];
var { width, height } = Dimensions.get('window');

class CardComponent extends Component {
  renderHome = () => {
    console.warn(this.props.search);
    return images.map((image, index) => {
      return (
        <TouchableOpacity onPress={() => console.warn(index)} key={index}>
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
        </TouchableOpacity>
      );
    });
  };
  render() {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {this.renderHome.bind(this)()}
      </View>
    );
  }
}
export default CardComponent;
