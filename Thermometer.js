import React, { Component } from 'react';
import { StyleSheet,ImageBackground, Text, View, Image } from 'react-native';

class Thermometer extends Component {
  constructor(props) {
    super(props)
    }

    render() {
      return (
        
          <ImageBackground style={styles.face} source={require('./img/celsius.png')}>
          
            <Image style={styles.needle} source={require('./img/needle.png')} />
         
        </ImageBackground>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red',
    margin: 50,

  },
  face:{
    flex: 1,
    width: undefined,
    height: undefined,
  },
  needle:{
    flex: 1,
    width: undefined,
    height: undefined,
  }
});

export default Thermometer