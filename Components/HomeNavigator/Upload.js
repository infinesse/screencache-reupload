import React, { Component } from 'react';
import { View, Dimensions, Button, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker'

let { width, height } = Dimensions.get('window');

const initialState = {
  imageUri: null,
  imageWidth: null,
  imageHeight: null
};

class UploadTab extends Component {
  state = initialState;

  _pickImage = async () => {
    const res = await Permissions.askAsync(Permissions.CAMERA_ROLL)

    if (res.status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        this.setState({
          imageUri: result.uri,
          imageWidth: result.width,
          imageHeight: result.height
        });
      }
    }
  };

  render() {
    const { imageUri } = this.state;
    const { addItem } = this.props.screenProps;

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

        {imageUri && (
          <Button
            title="Upload"
            onPress={() => {
              addItem('new item', imageUri);
              this.setState(initialState);
              this.props.navigation.goBack();
            }}
          />
        )}
      </View>
    );
  }
}

export default UploadTab;

// https://www.youtube.com/watch?v=Gq8udJJ724Y
