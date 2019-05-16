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

const TEXT_STYLE = {
  fontStyle: 'italic',
  flex: 1,
  flexWrap: 'wrap',
  color: 'white'
};

var { width, height } = Dimensions.get('window');

class FlatListItem extends Component {
  render() {
    const {
      item,
      isEditing,
      beginEditItem,
      endEditItem,
      editItem
    } = this.props;

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
              value={item.textContent}
              onChangeText={newText => editItem(item.key, newText)}
              onSubmitEditing={endEditItem}
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
    const {
      items,
      search,
      editingItem,
      beginEditItem,
      endEditItem,
      editItem
    } = this.props;

    const pattern = new RegExp(search, 'i');

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={items.filter(
            item => !search || (item.textContent || '').search(pattern) !== -1
          )}
          renderItem={({ item, index }) => {
            return (
              <FlatListItem
                item={item}
                index={index}
                isEditing={editingItem === item.key}
                beginEditItem={beginEditItem}
                endEditItem={endEditItem}
                editItem={editItem}
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
