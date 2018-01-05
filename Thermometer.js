import React, { Component } from 'react';
import { StyleSheet,ImageBackground, Animated, Text, View, Image } from 'react-native';

class Thermometer extends Component {
  constructor(props) {
    super(props)
    }

  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }
  
  componentDidMount() {
      Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 10000,              // Make it take a while
        }
      ).start();                        // Starts the animation
    }

    render() {
      let { fadeAnim } = this.state;

      return (
          <ImageBackground style={styles.face} source={require('./img/celsius.png')} resizeMode="contain">
          
            <Animated.Image style={[styles.needle, {opacity:fadeAnim}]} source={require('./img/needle.png')} resizeMode="contain" />
         
        </ImageBackground>
      );
    }
  }

const styles = StyleSheet.create({
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