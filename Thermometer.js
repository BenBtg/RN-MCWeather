import React, { Component } from 'react';
import { StyleSheet,ImageBackground, Animated, Text, View, Image, Easing } from 'react-native';

class Thermometer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinValue: new Animated.Value(0),
      tempValue: props.temp,
    }
  }
  
  componentDidMount() {
      Animated.timing(
        this.state.spinValue,
        {
          toValue: this.state.tempValue,
          duration: 5000,
          easing: Easing.bounce
        }
      ).start();

      this.state.spinValue.addListener(({value}) => this.setState({tempValue: value}));  
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        tempValue: nextProps.temp,
      });

      Animated.timing(
        this.state.spinValue,
        {
          toValue: nextProps.temp,
          duration: 5000,
          easing: Easing.bounce
        }
      ).start();
    }

    render() {
      var spin = this.state.spinValue.interpolate({
        inputRange: [-60, 60],
        outputRange: ['-128deg', '128deg'],
      });

      return (
        <ImageBackground style={styles.face} source={require('./img/celsius.png')} resizeMode="contain">
            <Animated.Image style={[styles.needle, {transform:[{rotate: spin}]}]} source={require('./img/needle.png')} resizeMode="contain" />
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