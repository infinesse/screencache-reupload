import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Button, Image } from 'react-native';
import { Icon } from 'native-base';
// import { LinearGradient } from 'expo';
import { ImagePicker } from 'expo';

var { width, height } = Dimensions.get('window');

const initialState = {
  imageUri: null,
  imageWidth: null,
  imageHeight: null
};

class UploadTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="md-archive"
        style={{
          color: tintColor,
          paddingBottom: 30
          /*paddingLeft: 175

          width: 200*/
        }}
      />
    )
  };
  state = initialState;

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      this.setState({
        imageUri: result.uri,
        imageWidth: result.width,
        imageHeight: result.height
      });
    }
  };

  render() {
    const { imageUri, imageWidth, imageHeight } = this.state;
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
