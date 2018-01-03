/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  ScrollView
} from 'react-native';


class SearchPage extends Component<{}> {
  render() {
    return(
    <ScrollView backgroundColor="green">
        <Image
          source={{uri: 'https://www.planwallpaper.com/static/images/1379596.jpg'}}
          style={{width: 320, height:180}}
        />
        <Text>
          On iOS, a React Native ScrollView uses a native UIScrollView.
          On Android, it uses a native ScrollView.

          On iOS, a React Native Image uses a native UIImageView.
          On Android, it uses a native ImageView.

          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
        </Text>
      </ScrollView>
  );
  }
}

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          title: 'MC Weather Test',
          component: SearchPage,
          rightButtonTitle: 'Add',
          onRightButtonPress: this.onRightButtonPress
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
