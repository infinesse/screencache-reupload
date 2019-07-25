import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    width: null,
    height: null
  }
});

export default ({ navigation }) => (
  <View style={styles.fullScreen}>
    <TouchableOpacity style={styles.fullScreen} onPress={() => navigation.goBack()}>
      <Image
        style={styles.fullScreen}
        source={{uri: navigation.getParam('imageUrl')}}
      />
    </TouchableOpacity>
  </View>
);