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
          toValue: 50,
          duration: 5000,
          easing: Easing.bounce
        }
      ).start();

   
    }

    render() {
      var spin = this.state.spinValue.interpolate({
        inputRange: [-60, 60],
        outputRange: ['-125deg', '125deg'],
      });

      let { spinValue } = this.state;
      console.log(spinValue)

      console.log("BTGTesting!\n")

      return (
          <ImageBackground style={styles.face} source={require('./img/celsius.png')} resizeMode="contain">
          
            <Animated.Image style={[styles.needle, {transform:[{rotate: spin}]}]} source={require('./img/needle.png')} resizeMode="contain" />

            <Animated.Text text='Testing'/> 
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