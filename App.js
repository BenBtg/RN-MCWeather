import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
        <View style={styles.container}>
          <Text>Shake your phone to open the developer menu.</Text>

          <View style={{ width:380, height:380, backgroundColor:'green'}}>
            <Thermometer/>
          </View>

          <WeatherTextBlock style={{flex:1}} description='Overcast clouds' temp="3" high="5" low="2"/> 
          <Text style={{flex:1}} >Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#99f',
    marginTop: 20,
    
  },
  regular:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,},
  bigTemp:{
    fontSize: 50,},
});
