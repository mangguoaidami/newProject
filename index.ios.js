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

export default class kitten extends Component {
  render(){
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
      </View>
    )
  }
}

AppRegistry.registerComponent('newProj', () => kitten);
