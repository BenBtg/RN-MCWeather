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
  NavigatorIOS,
  TextInput,
  TouchableHighlight
} from 'react-native';


class SearchPage extends Component<{}> {
  render() {
    return(
    <View style>
    <Text>Current Scene: { this.props.title }</Text>
    <TouchableHighlight>
      <Text>Tap me to load the next scene</Text>
    </TouchableHighlight>
  </View>);
  }
}

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          title: 'MC Weather',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#656565',
    marginTop: 20,
  },
});
