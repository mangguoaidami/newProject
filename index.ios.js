/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { RkButton, RkCard, RkTheme } from 'react-native-ui-kitten';

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = { showText: true };

    //toggle this state
    setTimeout(() => {
      this.setState(previousState => {
        return {showText: !previousState};
      })
    }, 3000)
  }

  render() {
    let displayText = this.state.showText ? this.props.name: '';
    return (
      <Text>{displayText}</Text>
    )
  }
}

export default class kitten extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>hidded after 1000 sm.</Text>
        <Blink name="sadadaddasdasd"/>
      </View>
    )
  }
}

AppRegistry.registerComponent('newProj', () => kitten);
