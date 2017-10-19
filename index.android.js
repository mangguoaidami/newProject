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
  View
} from 'react-native';
import { RkButton, RkCard } from 'react-native-ui-kitten';

export default class newProj extends Component {
  render() {
    return (
      <RkCard>
        <View rkCardHeader>
          <Text>Header</Text>
        </View>
        <View rkCardContent>
          <Text>this is UI Kitten framework.</Text>
          <RkButton>save</RkButton>
        </View>
        <View rkCardFooter>
          <Text>this is Footer.</Text>
        </View>
      </RkCard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myFirstApp', () => newProj);
