import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text Style>Hello {this.props.name}!</Text>
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
        <Image/>
        <Greeting name='Ben'/>
          <Text>Open up App.js to sart working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          
          <Image style={{width: 193, height: 110}}
          source={pic}/>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99f',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
});
