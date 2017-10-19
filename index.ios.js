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

export default class kitten extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.center}>
        <Text style={styles.bigblue}>big blue.</Text>
        <Text style={styles.red}>red.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
})

AppRegistry.registerComponent('newProj', () => kitten);
