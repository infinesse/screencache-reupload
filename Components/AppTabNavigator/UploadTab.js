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
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
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
