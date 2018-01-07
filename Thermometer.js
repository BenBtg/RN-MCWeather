import React, { Component } from 'react';
import { StyleSheet,ImageBackground, Animated, Text, View, Image, Easing } from 'react-native';

class Thermometer extends Component {
  constructor(props) {
    super(props)
    }

  state = {
    spinValue: new Animated.Value(0),
  }
  
  componentDidMount() {
      Animated.timing(
        this.state.spinValue,
        {
          toValue: 10,
          duration: 10000,
          easing: Easing.bounce
        }
      ).start();

      const spin = this.state.spinValue.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg'],
      });
    }

    render() {
      let { spinValue } = this.state;

      return (
          <ImageBackground style={styles.face} source={require('./img/celsius.png')} resizeMode="contain">
          
            <Animated.Image style={[styles.needle, {transform:[{rotate: spinValue}]}]} source={require('./img/needle.png')} resizeMode="contain" />
         
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