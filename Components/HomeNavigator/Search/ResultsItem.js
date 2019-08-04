import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Clipboard
} from 'react-native';
import ResultsItemSwipeout from './ResultsItemSwipeout';

const LONG_PRESS_TIME = 1000;

const textStyle = {
  flex: 1,
  flexWrap: 'wrap',
  color: 'white'
};

export default class ResultsItem extends Component {
  state = {
    pressAction: new Animated.Value(0),
    toastAction: new Animated.Value(0),
    showToast: false
  }

  componentWillMount() {
    this._pressAccumulator = 0;
    this._enablePress = true;
    this.state.pressAction.addListener(v => this._pressAccumulator = v.value);
    this.state.toastAction.addListener(v => this._toastAccumulator = v.value);
  }


  handlePress() {
    if (this._enablePress)
      this.props.navigation.navigate('Details', { imageUrl: this.props.item.imageUrl })
  }

  handleLongPress() {
    this._enablePress = false;
    Clipboard.setString(this.props.item.textContent);
    this.showToast();
  }

  handlePressIn() {
    Animated
      .timing(this.state.pressAction, { duration: LONG_PRESS_TIME, toValue: 1 })
      .start(() => this._pressAccumulator === 1 && this.handleLongPress());
  }

  handlePressOut() {
    Animated
      .timing(this.state.pressAction, { duration: this._pressAccumulator * LONG_PRESS_TIME, toValue: 0 })
      .start(() => this._enablePress = true)
  }

  showToast() {
    this._toastAccumulator = 0;

    this.setState({
      ...this.state,
      showToast: true
    });

    Animated
      .timing(this.state.toastAction, { duration: LONG_PRESS_TIME, toValue: 1 })
      .start(() => this._toastAccumulator === 1 && this.hideToast());
  }

  hideToast() {
    this.setState({
      ...this.state,
      showToast: false
    });
  }
  render() {
    const {
      navigation,

      item,
      index,
      isEditing,
      isNew,
      itemsLocked,

      beginEditItem,
      endEditItem,
      editItem,
      deleteItem,
      lockItems
    } = this.props;

    return (
      <ResultsItemSwipeout
        item={item}
        index={index}
        deleteItemHandler={deleteItem}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderWidth: 5,
            borderColor: '#007399',

            backgroundColor: '#001f29'
          }}
        >
          <TouchableOpacity
            onPress={this.handlePress.bind(this)}
            onPressIn={this.handlePressIn.bind(this)}
            onPressOut={this.handlePressOut.bind(this)}
          >
            {this.state.showToast && <Text style={textStyle}>Copied to clipboard!</Text>}
            <Image
              source={{ uri: item.imageUrl }}
              style={{ width: 200, height: 300, margin: 5 }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, flexWrap: 'wrap' }}>
            {isEditing ? (
              <TextInput
                style={textStyle}
                value={item.textContent}
                onChangeText={newText => editItem(item.key, newText)}
                onSubmitEditing={endEditItem}
                onBlur={endEditItem}
                autoFocus={isEditing}
                selectTextOnFocus={isNew}
                multiline
              />
            ) : (
                <Text style={textStyle} onPress={() => beginEditItem(item.key)}>
                  {item.textContent}
                </Text>
              )}
          </TouchableOpacity>
        </View>
      </ResultsItemSwipeout>
    );
  }
};
