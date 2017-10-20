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
      <View style={{ flex: 1, flexDirection: 'row'}}>
        <View style={{ flex: 1, backgroundColor: 'powderblue'}}></View>
        <View style={{ flex: 1, backgroundColor: 'skyblue'}}></View>
        <View style={{ flex: 1, backgroundColor: 'steelblue'}}></View>
      </View>
    )
  }
}

AppRegistry.registerComponent('newProj', () => kitten);
