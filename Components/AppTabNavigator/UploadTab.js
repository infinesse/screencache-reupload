import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
class UploadTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-add-circle" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.setTextColor}>Upload Tab</Text>
      </View>
    );
  }
}
export default UploadTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  setTextColor: {
    color: 'white'
  }
});

/*  
found@ https://stackoverflow.com/questions/19351408/creating-an-array-of-image-objects

var CreateImage = function(src, title) {
  var img = new Image();
  img.src = src;
  img.alt = title;
  img.title = title;
  return img;
};

var images = []'

images.push(createImage('imageA.jpg', 'image title'));

console.log(images);

OUTPUT: [
  <img src='imageA.jpg' title='image title' alt='??',
];
*/
