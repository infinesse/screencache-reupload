import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import ImageViewer from 'react-native-image-zoom-viewer';

export default ({ navigation }) => (
  <ImageViewer
    enableImageZoom={true}
    enableSwipeDown={true}
    onCancel={() => navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })]
    }))}
    renderIndicator={() => false}
    imageUrls={[
      { url: navigation.getParam('imageUrl') }
    ]}
  />
);