import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  Text,
  StatusBar
} from 'react-native';

var { width, height } = Dimensions.get('window');

class Login extends Component {
  render(height, width) {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.flexTwo}>
        <Text style={{ color: 'white' }}>Screencache</Text>

        <Text style={styles.flexOne}>Welcome</Text>
        <View style={styles.formOne}>
          <Text style={styles.centercenter}>USERNAME</Text>
        </View>
        <View style={styles.formOne}>
          <Text>EMAIL</Text>
        </View>

        <View style={styles.buttonBk}>
          <Button
            onPress={() => this.props.navigation.navigate('Main')}
            title="Login"
            color="blue"
          />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('Register')}
          title="Create Account"
          color="blue"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexTwo: {
    height: height / 2,
    width: width,
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexOne: {
    color: 'white'
  },
  buttonBk: {
    width: 75,
    height: 40,
    backgroundColor: '#42f4c5',
    borderRadius: 10,
    marginTop: 5
  },
  formOne: {
    width: 200,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default Login;
