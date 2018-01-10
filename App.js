'use strict'; 

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, ActivityIndicator, ListView } from 'react-native';
import Thermometer from './Thermometer';


// function getCurrentWeather(cityName){
//   let weatherUri = {uri: 'https://xvtsfapktnxnh4rzvvie.azurewebsites.net/api/functions/Weather/WeatherByCity?city=London&unit=imperial'};
//   let backgroundUri = {uri: 'https://xvtsfapktnxnh4rzvvie.azurewebsites.net/api/functions/Image/BackgroundByCityAndWeather?city=Bellevue&weather=Clouds&height=1920'};
//   console.log("Getting weather for : " + cityName + "\n");
 
  
//     try {
//       let response = await fetch(
//         weatherUri.uri
//       );
//       let responseJson = await response.json();
//       this.setState({isLoading: false});
//       return responseJson;
//     } catch (error) {
//       console.error(error);
//     }
// }


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
    var defaultWeather = {
      "CurrentTemperature": 0,
      "Description": "",
      "Id": "",
      "MaxTemperature": 0,
      "MinTemperature": 0,
      "Name": "",
      "Overview": "Mist",
    }

    this.state = { 
      text: '20',
      isLoading: true,
      weather: defaultWeather,};
    }

  componentDidMount() {
    return fetch('https://xvtsfapktnxnh4rzvvie.azurewebsites.net/api/functions/Weather/WeatherByCity?city=London&unit=metric')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.CurrentTemperature);
      this.setState({
        isLoading: false,
        weather: responseJson,
      }, function() {
        // do something with new state
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    let pic = {
      uri: 'https://i.pinimg.com/736x/24/69/87/2469874f2b5f78d5e6e812f31fc3c4bf--wallpaper-for-iphone-mobile-wallpaper.jpg'
    }
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
          <Text>Working</Text>
        </View>
      );
    }

    return (
        <ImageBackground style={styles.container} source={pic}>
          <View style={{ height:350, margin:30 }}>
            <Thermometer temp={this.state.text}/>
          </View>
          <WeatherTextBlock style={{flex:1}} 
                description={this.state.weather.Overview} 
                temp={this.state.weather.CurrentTemperature} 
                high={this.state.weather.MaxTemperature} 
                low={this.state.weather.MinTemperature} /> 

          <TextInput
            style={{height: 40, fontSize: 30,} }
            placeholder="Type here to translate!"
            onChangeText={(text) => this.getCurrentWeather({text})}/>

{/* <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        /> */}

          <Text style={[styles.regular, styles.cityName]}>Bellevue</Text>
        </ImageBackground>
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
    alignItems: 'center'
  }
});
