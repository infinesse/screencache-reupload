import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Button, Image } from 'react-native';
import { Icon } from 'native-base';
// import { LinearGradient } from 'expo';
import { ImagePicker } from 'expo';

var { width, height } = Dimensions.get('window');

class UploadTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="md-archive"
        style={{
          color: tintColor,
          paddingBottom: 30,
          paddingLeft: 125,

          width: 200
        }}
      />
    )
  };
  state = {
    imageUri: null,
    imageWidth: null,
    imageHeight: null
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    console.log(result);

    if (!result.cancelled) {
      this.setState({
        imageUri: result.uri,
        imageWidth: result.width,
        imageHeight: result.height
      });
    }
  };

  _uploadImage() {}

  render() {
    let { imageUri, imageWidth, imageHeight } = this.state;

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
        <Button title="Choose Photo" onPress={this._pickImage} />

        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ width: width - 100, height: height - 400 }}
            resizeMode={'contain'}
          />
        )}

        <Button title="Upload" onPress={this._uploadImage} />
      </View>
    );
  }
}
export default UploadTab;

// https://www.youtube.com/watch?v=Gq8udJJ724Y
