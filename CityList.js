import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ListView, TouchableHighlight } from 'react-native';
import {prompt} from 'react-native-prompt-android';

export default class CityList extends Component {
    static navigationOptions = {
    title: 'MCWeather',
    };
    
  constructor(props) {
    super(props);

    var ds =  new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});

    this.state = {
      dataSource: ds.cloneWithRows(['Bristol','London', 'Seattle'])
    };
  }

  componentDidMount(){
    const params = {
      right: (
          <Button
              onPress={() => { this.save(); }}
              title={"Save"}
          />
      ),
  };
  
  this.props.navigation.setParams(params);
  }

  pressRow(rowData)
  {
    const { navigate } = this.props.navigation;
    navigate('Details', { city: rowData })
  }

  renderRow(rowData){
      return (
          <TouchableHighlight
          onPress={()=> this.pressRow(rowData)}
          underlayColor='#ddd'>
            <Text style={{color: '#333', padding: 20, fontSize: 20,
                backgroundColor: 'white'}}>{rowData}</Text> 
        </TouchableHighlight>
      );
  }

  renderSeparator()
  {
      return (<View style={{flex:1, height: StyleSheet.hairlineWidth, borderColor: 'black', backgroundColor: 'black'}}/>)
  }

  render() {  
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, marginTop: 20,
        justifyContent: 'flex-start'}}>
        <ListView 
        renderSeparator={this.renderSeparator}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}/>
      </View>
    );
  }
}