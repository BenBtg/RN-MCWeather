import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Thermometer from './Thermometer';

class WeatherTextBlock extends Component {
  render() {
    return (
      <View style={{backgroundColor:'blue'}}>
        <Text style={styles.bodytext}>{this.props.description}</Text>
        <Text style={[styles.bodytext, styles.bigTemp]}>{this.props.temp} °C</Text>
        <Text style={styles.bodytext}>HIGH: {this.props.high}°C LOW: {this.props.low}°C</Text>
      </View>
    );
  }
}

export default class MCWeatherApp extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
        <View style={styles.container}>
          <View style={{flex:1, backgroundColor:'red' }}>
            <Thermometer/>
          </View>
          <WeatherTextBlock style={{flex:1}} description='overcast clouds' temp="3" high="5" low="2"/>
          <Text style={{flex:1}} >Shake your phone to open the developer menu.</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99f',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  bodytext:{
    color: 'white',
  fontWeight: 'bold',
  fontSize: 30,},
});
