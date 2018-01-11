import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, ActivityIndicator, ListView, Switch } from 'react-native';
import Thermometer from './Thermometer';

class WeatherTextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMetric: props.isMetric,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      isMetric: nextProps.isMetric,
    });
  }

  render() {
    var unit = this.state.isMetric ? 'C' : 'F';
    return (
      <View style={{flex:1, flexDirection:'column', margin:20 }}>
        <Text style={styles.regular}>{this.props.description}</Text>
        <View style={{flexDirection: 'row', alignItems:'flex-start',}}>
          <Text style={[styles.regular, styles.bigTemp]}>{this.props.temp}</Text>
          <Text style={styles.regular}>°{unit}</Text>
        </View>
        <Text style={styles.regular}>HIGH: {this.props.high}°{unit} LOW: {this.props.low}°{unit}</Text>
      </View>
    );
  }
}

export default class MCWeatherApp extends Component {
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
      weather: defaultWeather,
      isMetric: true,
      units: 'metric',
      backgroundImage: 'https://i.pinimg.com/736x/24/69/87/2469874f2b5f78d5e6e812f31fc3c4bf--wallpaper-for-iphone-mobile-wallpaper.jpg',
    };
    }

  getCurrentWeather(cityName, units) {
    console.log(cityName)

    fetch('https://xvtsfapktnxnh4rzvvie.azurewebsites.net/api/functions/Weather/WeatherByCity?city='+cityName+'&unit='+ units)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.CurrentTemperature);
      this.setState({
        isLoading: false,
        weather: responseJson,
      }, function() {
        // do something with new state
        //this.getBackgroundImage(responseJson.Name, responseJson.Overview)
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getBackgroundImage(cityName, conditions) {
    console.log(cityName)
    this.setState({isLoading:true});

    fetch('https://xvtsfapktnxnh4rzvvie.azurewebsites.net/api/functions/Image/BackgroundByCityAndWeather?city='+cityName+'&weather='+conditions+'&height=1920') 
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        backgroundImage: responseJson,
      }, function() {
        // do something with new state
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    this.getCurrentWeather('Bristol', 'metric') 
  }

  render() {
    let pic = {
      uri: 'https://i.pinimg.com/736x/24/69/87/2469874f2b5f78d5e6e812f31fc3c4bf--wallpaper-for-iphone-mobile-wallpaper.jpg'
    }
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
        <ImageBackground style={styles.container} source={pic}>
          <View style={{ height:350, margin:30 }}>
            <Thermometer isMetric={this.state.isMetric} temp={this.state.weather.CurrentTemperature}/>
          </View>
          <WeatherTextBlock style={{flex:1}} 
                isMetric={this.state.isMetric}
                description={this.state.weather.Overview} 
                temp={this.state.weather.CurrentTemperature} 
                high={this.state.weather.MaxTemperature} 
                low={this.state.weather.MinTemperature} /> 

          <View style={{margin: 20}}>
            <Text style={styles.regular}>Use Metric</Text>
            <Switch  style={{marginTop:10}} onValueChange={ (value) => {
                var unit = value ? 'metric':'imperial';
                this.setState({ isMetric: value, units: unit });
                this.getCurrentWeather(this.state.weather.Name, unit);
              }
            } 
              value={ this.state.isMetric }/>
          </View>

          <Text style={[styles.regular, styles.cityName]}>{this.state.weather.Name}</Text>
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
    alignItems: 'center',
    textAlign: 'center'
    
  }
});