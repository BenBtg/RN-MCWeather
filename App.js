'use strict'; 

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, ActivityIndicator, ListView, Switch } from 'react-native';
import WeatherDetail from './WeatherDetail';

export default class MCWeatherApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
        <View style={styles.container}>
          <WeatherDetail/>
        </View>
    );
  }
}

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