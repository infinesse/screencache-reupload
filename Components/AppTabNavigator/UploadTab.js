import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  ImageBackground
} from 'react-native';
import { Icon } from 'native-base';
import { LinearGradient } from 'expo';
import ImagePicker from 'react-native-image-picker';

var { width, height } = Dimensions.get('window');
class UploadTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-add-circle" style={{ color: tintColor }} />
    )
  };

  handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      console.log('response', response);
    });
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
      // <View
      //   style={{
      //     width: width / 3,
      //     height: height / 3,
      //     backgroundColor: 'black'
      //   }}
      // >
      //   <Text style={{ color: 'white' }}>Text</Text>
      // </View>

      // <ImageBackground
      //   style={styles.backgroundImage}
      //   // source={require('../../assets/IMG-0268.jpeg')}
      // >
      //   <View style={styles.container}>
      //     <LinearGradient
      //       colors={['rgba(0,0,0,0.8)', 'transparent']}
      //       style={{
      //         position: 'absolute',
      //         left: 0,
      //         right: 0,
      //         top: 0,
      //         height: 15
      //       }}
      //     />
      //   </View>
      // </ImageBackground>
    );
  }
}
export default UploadTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: 'purple'
  },
  setTextColor: {
    color: 'white'
  },
  backgroundImage: {
    flex: 1,
    alignContent: 'center',
    width: null
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
