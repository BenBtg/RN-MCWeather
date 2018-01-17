'use strict'; 

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {Prompt} from 'react-native-prompt-android';

import { StyleSheet, Text, View, Image, ImageBackground, TextInput, ActivityIndicator, ListView, Switch } from 'react-native';
import WeatherDetail from './WeatherDetail';
import CityList from './CityList';

export default class MCWeatherApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <RootNavigator/>
        // <View style={styles.container}>
        //   <CityList/>
        //   {/* <WeatherDetail/> */}
        // </View>
    );
  }
}

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: CityList,
  },
  Details: {
    screen: WeatherDetail,
  },
});

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'transparent',
    width: null,
    height: null,
  },
  backgroundImage:{
    flex:1,
    position: 'absolute',

    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  regular:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,},
  bigTemp:{
    fontSize: 50,},
  cityName:{
    fontSize:40,
    margin: 20,
    alignItems: 'center',
    textAlign: 'center'
    
  }
});