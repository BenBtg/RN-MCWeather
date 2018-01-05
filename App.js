import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Thermometer from './Thermometer';

class WeatherTextBlock extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'blue', flexDirection:'column' }}>
        <Text style={styles.regular}>{this.props.description}</Text>
        <View style={{flexDirection: 'row', alignItems:'flex-start', backgroundColor:'red' }}>
          <Text style={[styles.regular, styles.bigTemp]}>{this.props.temp}</Text>
          <Text style={styles.regular}>°C</Text>
        </View>
        <Text style={styles.regular}>HIGH: {this.props.high}°C LOW: {this.props.low}°C</Text>
      </View>
    );
  }
}

export default class MCWeatherApp extends React.Component {
  render() {
    let pic = {
      uri: 'https://i.pinimg.com/736x/24/69/87/2469874f2b5f78d5e6e812f31fc3c4bf--wallpaper-for-iphone-mobile-wallpaper.jpg'
    };

    return (
        <ImageBackground style={styles.container} source={pic}>
          {/* <Image style={styles.backgroundImage} source={pic} resizeMode="cover"/> */}
          <Text>Shake your phone to open the developer menu.</Text>
          <View style={{ height:350, margin:20 }}>
            <Thermometer/>
          </View>
          <WeatherTextBlock style={{flex:1}} description='Overcast clouds' temp="3" high="5" low="2"/> 
          
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
});
