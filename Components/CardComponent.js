import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
// import { BlurView } from 'expo';
// import { Row } from 'native-base';

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
      'https://lh3.googleusercontent.com/w7EhTeRH1viSCr-8slvbcqP0jz5QsSGfygfOh90ZkcuvkMq_kBjbNIYxettvJoWOCpso7zGw-AMqe4zE01VUKYf3zQ',
    textContent:
      'Antibiotic resistance and the overprescribing of them. I dont think this gets talked about nearly enough and its already a problem. I remember reading an article recently that said in the future antibiotic resistant bacteria related deaths will surpasas cancer deaths.'
  },
  {
    key: '0048',
    imageUrl:
      'https://lh3.googleusercontent.com/ijJB83f0vkB7ulMn3vVNU0peCyYMfMH5MSRS_oEFIrMEnVvTeEqhQxJ7b3T2YyMRXtuCEyt8dGMz_PUNt6lWsOT2FkI',
    textContent: 'movie avengers endgame showtimes film theater'
  },
  {
    key: '0064',
    imageUrl:
      'https://lh3.googleusercontent.com/g6sAKB8ylhumGEvgIfrafhF8HqV5KlRJb_t9GHIdYLJtlyYA45ZfeTBS4y4eKQ4DvpbytzbCjS3CVr-GNw5R_g1K',
    textContent:
      'This is a hornbill and a dwarf mongoose. They have a symbiotic relationship. When the mongoose forages around it scares bugs out of the grass which are then easiy pickings for the hornbill. In turn the hornbill is an early warning system for predators for the mongoose.'
  },
  {
    key: '0089',
    imageUrl:
      'https://lh3.googleusercontent.com/ZgmPvVU0TtuWHCtwtvZRmPQ-5cUYFeZQlrf1DgCADRw38keeqsJrLnstIr0OCoIXk4qsfsw5KnHRZznc_s00Q5Fk',
    textContent:
      'reddit comment automation robots universal-basic-income utopia free market libertarian jobs'
  },
  {
    key: '0119',
    imageUrl:
      'https://lh3.googleusercontent.com/9SG09CZO8mRLjg6HePL9wNIG3ofH8w2vGOR_s1fnhfv5KITGX8eC8NuyK6ovNpa4XWXp3-fMKE5YxcdIZ46tEjD0',
    textContent:
      'reddit comment antarctica interesting science ancient human disease thaw.'
  }
];

const TEXT_STYLE = {
  fontStyle: 'italic',
  flex: 1,
  flexWrap: 'wrap',
  color: 'white'
};

var { width, height } = Dimensions.get('window');

class FlatListItem extends Component {
  render() {
    const { item, isEditing, beginEditItem, endEditItem } = this.props;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderWidth: 5,
          borderColor: '#2e2e2e',
          marginBottom: 5,
          backgroundColor: '#1f1f1f'
        }}
      >
        <TouchableOpacity onPress={this.zoomView}>
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: 200, height: 300, margin: 5 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, flexWrap: 'wrap' }}>
          {isEditing ? (
            <TextInput
              style={TEXT_STYLE}
              onChangeText={text => this.setState({ text })}
              value={item.textContent}
              multiline
            />
          ) : (
            <Text style={TEXT_STYLE} onPress={() => beginEditItem(item.key)}>
              {item.textContent}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
export default class BasicFlatList extends Component {
  render() {
    const { search, editingItem, beginEditItem, endEditItem } = this.props;

    const pattern = new RegExp(search, 'i');

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={imagesF.filter(
            item => !search || item.textContent.search(pattern) !== -1
          )}
          renderItem={({ item, index }) => {
            return (
              <FlatListItem
                item={item}
                index={index}
                isEditing={editingItem === item.key}
                beginEditItem={beginEditItem}
                endEditItem={endEditItem}
              />
            );
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
