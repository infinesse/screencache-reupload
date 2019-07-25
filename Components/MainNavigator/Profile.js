import React, { Component } from 'react';
import { Icon } from 'native-base';
import {
  View,
  Dimensions,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
var { height, width } = Dimensions.get('window');
const Profile = () => (
  <View style={{ flex: 1 }}>
    {/* <SafeAreaView style={{ flex: 1 }}> */}
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1f1f1f', }}>
      <ImageBackground source={{ uri: "https://lh3.googleusercontent.com/BO97zNM8F56Ht-SV3lnJWmvhBGHrNLvjTrdyMWJ-IzGCAZi1aTfBaFdJDrgqo4WzUHLe7rYs0WDaBp4-Wd6mqNlaD8I" }} style={{ flex: 1, backgroundColor: '#666666', width: width, height: null }}>
        <Text style={{
          flex: 1, textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: 3, height: 3 },
          textShadowRadius: 1,
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          paddingLeft: width / 25,
          paddingTop: height / 8


        }}>Meowterspace</Text>
        <Text style={{ flex: 1, color: 'rgba(0, 0, 0, 0.75)', fontWeight: 'bold', fontSize: 18, paddingLeft: width / 25 }}>Portland, Oregon USA</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1, color: 'white', paddingLeft: width / 8 }}>205 Friends</Text>

          <Text style={{ flex: 1, color: 'white' }}>Message</Text>
          <Text style={{ flex: 1, color: 'white' }}>+</Text>


        </View>
      </ImageBackground>
      {/* <View style={{ flex: 1, flexWrap: 'wrap', color: 'green', width: width, height: height / 3 }}>

        </View> */}
      <View style={{ height: height / 200, width: width, backgroundColor: 'black' }}></View>
      <ImageBackground source={{ uri: "https://cdna.artstation.com/p/assets/images/images/017/254/806/large/john-park-parrish.jpg?1555253161" }}
        style={{
          flex: 3,
          width: width,
          height: null

          // opacity: .5 
        }}>
        <Text style={{
          color: 'white', textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: 3, height: 3 },
          textShadowRadius: 1
        }}>I browse reddit mostly, and tend to find the most important inforamtion deepest in the comments.</Text>
        <View style={{ flex: 1 }}>

        </View>
        <View style={{ flex: 2 }}>
          <Text>Add images to page here.</Text>
        </View>
      </ImageBackground>


    </View>
    {/* <Text>This is a Profile screen</Text> */}
    {/* </SafeAreaView> */}
  </View >
)

export default Profile;



