/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { RkButton, RkCard, RkTheme } from 'react-native-ui-kitten';

class Blink extends Component {
  constructor(props){
    super(props);
    this.state = {showText: true};

    //Toggle the state every second
    setInterval(()=>{
      this.setState(previousState => {
        return {showText: !previousState.showText}
      })
    }, 1000);
  }

  render() {
    let dispalyText = this.state.showText ? this.props.name : '';
    return (
      <Text>{dispalyText}</Text>
    )
  }
}

export default class kitten extends Component{
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Blink name="love coding"/>
        <Blink name="i love games"/>
      </View>
    )
  }
}

AppRegistry.registerComponent('newProj', () => kitten);
