'use strict'; 

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput } from 'react-native';
import Thermometer from './Thermometer';

class WeatherTextBlock extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'column', margin:20 }}>
        <Text style={styles.regular}>{this.props.description}</Text>
        <View style={{flexDirection: 'row', alignItems:'flex-start',}}>
          <Text style={[styles.regular, styles.bigTemp]}>{this.props.temp}</Text>
          <Text style={styles.regular}>°C</Text>
        </View>
        <Text style={styles.regular}>HIGH: {this.props.high}°C LOW: {this.props.low}°C</Text>
      </View>
    );
  }
}

export default class MCWeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '20'};
    }

  componentDidMount
  

  render() {
    let pic = {
      uri: 'https://i.pinimg.com/736x/24/69/87/2469874f2b5f78d5e6e812f31fc3c4bf--wallpaper-for-iphone-mobile-wallpaper.jpg'
    }

    return (
        <ImageBackground style={styles.container} source={pic}>
          <View style={{ height:350, margin:30 }}>
            <Thermometer temp={this.state.text}/>
          </View>
          <WeatherTextBlock style={{flex:1}} description='Overcast clouds' temp="3" high="5" low="2"/> 

          <TextInput
            style={{height: 40, fontSize: 30,} }
            placeholder="Type here to translate!"
            onChangeText={(text) => this.getCurrentWeather({text})}/>

          <Text style={[styles.regular, styles.cityName]}>Bellevue</Text>
        </ImageBackground>
    );
  }


  getCurrentWeather(cityName)
  {
      console.log("Getting weather for : " + cityName + "\n");
      
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
    alignItems: 'center'
  }
});
