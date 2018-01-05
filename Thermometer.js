import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Thermometer extends Component {
  constructor(props) {
    super(props)
    }

    render() {
      return (
        <View style={styles.container}>
          <Image style={styles.face} source={require('./img/celsius.png')} resizeMode="cover" />
          
            <Image style={styles.needle} source={require('./img/needle.png')} resizeMode="cover"  />
         
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    
  },
  face:{
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
  needle:{
    zIndex: 2,
    alignSelf: 'center',
    top: -150,
    height: 150,
    width: 150,
  }
});

export default Thermometer