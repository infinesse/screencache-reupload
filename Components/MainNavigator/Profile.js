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
import { Avatar } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../assets/colors.json';

var { height, width } = Dimensions.get('window');
const Profile = () => (
  <View style={{ flexDirection: 'row', flex: 1 }}>
    {/* <SafeAreaView style={{ flex: 1 }}> */}
    <View style={{ flex: 1 }}>
      <LinearGradient style={{ flex: 1, width: width, height: null }} start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.Alternate, colors.Primary]}>



        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Avatar
              rounded
              source={{
                uri:
                  'https://www.barnesandnoble.com/blog/teen/wp-content/uploads/sites/6/2016/10/AdventureTime.jpg',
              }}
              style={{ flex: 1, height: '100%', width: '100%' }}
            />
          </View>


          <View style={{ flexDirection: 'row', flex: 2 }}>
            <View style={{ flexDirection: 'column', flex: 2 }}>
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


              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{ flex: 1, color: 'white', paddingLeft: width / 16 }}>205 Friends</Text>

                  <Text style={{ flex: 1, color: 'white' }}>10 Friends in Common</Text>
                  <Text style={{ flex: 1, color: 'white', paddingLeft: width / 16 }}>+</Text>
                </View>

              </View>
            </View>



          </View>
        </View>


      </LinearGradient>
      {/* <View style={{ flex: 1, flexWrap: 'wrap', color: 'green', width: width, height: height / 3 }}>

        </View> */}
      <View style={{ height: height / 200, width: width, backgroundColor: 'black' }}></View>
      <LinearGradient style={{ flex: 3, width: width, height: null }} start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.Alternate, colors.Primary]}>
        <Text style={{
          color: 'white', textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: 3, height: 3 },
          textShadowRadius: 1,
          paddingLeft: width / 6,
          paddingTop: width / 6,
          paddingRight: width / 6
        }}>I browse reddit mostly, and tend to find the most important information deepest in the comments.</Text>
        <View style={{ flex: 1 }}>

        </View>
        <View style={{ flex: 2 }}>
          <Text>Add images to page here.</Text>
        </View>

        <View style={{ height: height / 200, width: width, backgroundColor: 'black' }}></View>

      </LinearGradient>


    </View>
    {/* <Text>This is a Profile screen</Text> */}
    {/* </SafeAreaView> */}
  </View >
)

export default Profile;



