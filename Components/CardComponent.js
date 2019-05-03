import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { BlurView } from 'expo';
import { Row } from 'native-base';

var images = [
  require('../assets/IMG-0028.jpeg'),
  require('../assets/IMG-0048.jpeg'),
  require('../assets/IMG-0064.jpeg'),
  require('../assets/IMG-0089.jpeg'),
  require('../assets/IMG-0119.jpeg'),
  require('../assets/IMG-0151.jpeg'),
  require('../assets/IMG-0152.jpeg'),
  require('../assets/IMG-0153.jpeg'),
  require('../assets/IMG-0154.jpeg'),
  require('../assets/IMG-0155.jpeg'),
  require('../assets/IMG-0184.jpeg'),
  require('../assets/IMG-0221.jpeg'),
  require('../assets/IMG-0268.jpeg'),
  require('../assets/IMG-0309.jpeg'),
  require('../assets/IMG-0320.jpeg'),
  require('../assets/IMG-0474.jpeg'),
  require('../assets/IMG-0707.jpeg'),
  require('../assets/IMG-0860.jpeg')
];
var imagesF = [
  {
    key: '0028',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg',
    textContent: 'politics cat homeless healthcare'
  },
  {
    key: '0048',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg',
    textContent:
      'politics cat homeless healthcare vpolitics cat homeless healthcarepolitics cat homeless healthcarepolitics cat homeless healthcare'
  },
  {
    key: '0064',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg',
    textContent: 'politics cat homeless healthcare'
  },
  {
    key: '0089',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg',
    textContent: 'politics cat homeless healthcare'
  },
  {
    key: '0119',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg',
    textContent: 'politics cat homeless healthcare'
  }
];
var { width, height } = Dimensions.get('window');

class FlatListItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderWidth: 5,
          borderColor: 'lavender',
          marginBottom: 5,
          backgroundColor: '#420225'
        }}
      >
        <Image
          source={{ uri: this.props.item.imageUrl }}
          style={{ width: 200, height: 300, margin: 5 }}
        />
        <Text style={{ flex: 1, flexWrap: 'wrap', color: 'white' }}>
          {this.props.item.textContent}
        </Text>
      </View>
    );
  }
}
export default class BasicFlatList extends Component {
  render() {
    return (
      <View style={{ flex: 1, borderRadius: 5, borderColor: 'lavender' }}>
        <FlatList
          data={imagesF}
          renderItem={({ item, index }) => {
            return <FlatListItem item={item} index={index} />;
          }}
        />
      </View>
    );
  }
}

// class CardComponent extends Component {
//   renderHome = () => {
//     // console.warn(this.props.search);
//     // var search = this.props.search;
//     // console.log(images);
//     return images.map((image, index) => {
//       // return images
//       //   .filter(images => search.indexOf(images.index) !== -1)
//       //   .map((image, index) => {
//       return (
//         <View key={index}>
//           <FlatList
//             key={index}
//             style={[
//               {
//                 width: width,
//                 height: 300,
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 borderColor: 'lavender',
//                 backgroundColor: '#420225'
//               }
//             ]}
//           />
//           /* <Text style={{ color: 'white', width: width, letterSpacing: 50   }}>
//             Test
//           </Text> */
//         </View>

//touchable opacity x2 inside of a view inside of flatlist? '#69053e'

// <TouchableOpacity onPress={() => console.warn(index)} key={index}>
//   <View
//     key={index}
//     style={[
//       { width: width / 3 },
//       { height: height / 3 },
//       { marginBottom: 2 },
//       index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
//     ]}
//   >
//     <Image
//       style={{ flex: 1, width: undefined, height: undefined }}
//       source={image}
//     />
//     <Text style={[{ color: 'white', flexDirection: 'row' }]}>
//       Image Text, there will be a lot of this probably, should be tags
//     </Text>
//   </View>
// </TouchableOpacity>
//       );
//     });
//   };
//   render() {
//     return (
//       <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//         {this.renderHome.bind(this)()}
//       </View>
//     );
//   }
// }
// export default CardComponent;
