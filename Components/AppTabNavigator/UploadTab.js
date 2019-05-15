import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Button } from 'react-native';
import { Icon } from 'native-base';
// import { LinearGradient } from 'expo';
import { ImagePicker } from 'expo';
// import * as ImagePicker from 'expo-image-picker';

var { width, height } = Dimensions.get('window');
class UploadTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-add-circle" style={{ color: tintColor }} />
    )
  };
  state = {
    image: null
  };

  _handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      console.log('response', response);
    });
    // console.log(ImagePicker);
  };
  render() {
    let { image } = this.state;

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1f1f1f',
          width: width,
          height: height
        }}
      >
        <Button title="Choose Photo" onPress={this._handleChoosePhoto} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
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

// https://www.youtube.com/watch?v=Gq8udJJ724Y
