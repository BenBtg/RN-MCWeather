/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  TextInput
} from 'react-native';

export default class App extends Component<{}> {
  render() { return React.createElement(Text, {style: styles.description}, "MC Weather Btg");
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#F56565',
    marginTop: 65,
  },
});
